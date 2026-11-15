import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PermissionService} from './permission.service';
import baseUrl from '../../url';

describe('PermissionService', () => {
  let service: PermissionService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(PermissionService);
    http = TestBed.inject(HttpTestingController);
  });

  async function loadWith(body: any) {
    const p = service.load();
    http.expectOne(`${baseUrl}/user/me/permissions`).flush(body);
    await p;
  }

  it('can() true only for loaded permissions', async () => {
    await loadWith({role: 'ROLE_X', roleDisplayName: 'x', admin: false, permissions: ['IMPORT_READ']});
    expect(service.can('IMPORT_READ')).toBeTrue();
    expect(service.can('IMPORT_DELETE')).toBeFalse();
    expect(service.canAny('EXPORT_READ', 'IMPORT_READ')).toBeTrue();
    expect(service.isLoaded()).toBeTrue();
  });

  it('isAdmin and role name come from the response', async () => {
    await loadWith({role: 'ROLE_ADMIN', roleDisplayName: 'مدير النظام', admin: true, permissions: []});
    expect(service.isAdmin()).toBeTrue();
    expect(service.roleName()).toBe('مدير النظام');
  });

  it('failed load leaves nothing allowed', async () => {
    const p = service.load();
    http.expectOne(`${baseUrl}/user/me/permissions`).flush('x', {status: 401, statusText: 'Unauthorized'});
    await p;
    expect(service.can('IMPORT_READ')).toBeFalse();
    expect(service.isLoaded()).toBeFalse();
  });

  it('clear() forgets permissions', async () => {
    await loadWith({role: 'R', roleDisplayName: 'r', admin: true, permissions: ['IMPORT_READ']});
    service.clear();
    expect(service.can('IMPORT_READ')).toBeFalse();
    expect(service.isAdmin()).toBeFalse();
  });
});
