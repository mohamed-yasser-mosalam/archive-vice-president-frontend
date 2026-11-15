import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {CanDirective} from './can.directive';
import {PermissionService} from '../Services/Security/permission.service';

@Component({
  template: `<span id="del" *appCan="'IMPORT_DELETE'">x</span>
             <span id="any" *appCan="['EXPORT_READ', 'IMPORT_READ']">y</span>
             <span id="adm" *appCan="'admin'">z</span>`
})
class HostComponent {
}

describe('CanDirective', () => {
  function render(granted: string[], admin: boolean) {
    const perms = {
      can: (p: string) => granted.includes(p),
      canAny: (...p: string[]) => p.some(x => granted.includes(x)),
      isAdmin: () => admin
    };
    TestBed.configureTestingModule({
      declarations: [HostComponent, CanDirective],
      providers: [{provide: PermissionService, useValue: perms}]
    });
    const f = TestBed.createComponent(HostComponent);
    f.detectChanges();
    return f.nativeElement as HTMLElement;
  }

  it('renders only what is allowed', () => {
    const el = render(['IMPORT_READ'], false);
    expect(el.querySelector('#del')).toBeNull();
    expect(el.querySelector('#any')).not.toBeNull();
    expect(el.querySelector('#adm')).toBeNull();
  });

  it("'admin' shows for admins", () => {
    const el = render([], true);
    expect(el.querySelector('#adm')).not.toBeNull();
  });
});
