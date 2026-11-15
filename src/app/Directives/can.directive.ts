import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {PermissionService} from '../Services/Security/permission.service';

/**
 * Shows its content only when the user holds the permission (or any of a list).
 * `*appCan="'IMPORT_DELETE'"`, `*appCan="['IMPORT_READ','EXPORT_READ']"`, `*appCan="'admin'"`.
 */
@Directive({
  selector: '[appCan]'
})
export class CanDirective {
  private shown = false;

  constructor(private template: TemplateRef<unknown>,
              private view: ViewContainerRef,
              private perms: PermissionService) {
  }

  @Input() set appCan(value: string | string[]) {
    const list = Array.isArray(value) ? value : [value];
    const allowed = list.includes('admin') ? this.perms.isAdmin() : this.perms.canAny(...list);
    if (allowed && !this.shown) {
      this.view.createEmbeddedView(this.template);
      this.shown = true;
    } else if (!allowed && this.shown) {
      this.view.clear();
      this.shown = false;
    }
  }
}
