import {TestBed} from '@angular/core/testing';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {permissionGuard} from './permission.guard';
import {PermissionService} from './permission.service';
import {AlertService} from '../alert/alert.service';

describe('permissionGuard', () => {
  let perms: jasmine.SpyObj<PermissionService>;
  let router: jasmine.SpyObj<Router>;
  let alert: jasmine.SpyObj<AlertService>;

  beforeEach(() => {
    perms = jasmine.createSpyObj('PermissionService', ['can', 'isAdmin', 'isLoaded', 'load']);
    router = jasmine.createSpyObj('Router', ['parseUrl']);
    router.parseUrl.and.callFake((u: string) => u as any);
    alert = jasmine.createSpyObj('AlertService', ['error']);
    perms.isLoaded.and.returnValue(true);
    sessionStorage.setItem('token', 'Bearer x');
    TestBed.configureTestingModule({
      providers: [
        {provide: PermissionService, useValue: perms},
        {provide: Router, useValue: router},
        {provide: AlertService, useValue: alert}]
    });
  });

  afterEach(() => sessionStorage.clear());

  function run(data: any) {
    const route = {data} as unknown as ActivatedRouteSnapshot;
    return TestBed.runInInjectionContext(() => permissionGuard(route, {} as RouterStateSnapshot)) as Promise<any>;
  }

  it('allows when permission present', async () => {
    perms.can.and.returnValue(true);
    expect(await run({permission: 'IMPORT_READ'})).toBeTrue();
  });

  it('redirects to /home with an alert when permission missing', async () => {
    perms.can.and.returnValue(false);
    expect(await run({permission: 'IMPORT_DELETE'})).toBe('/home' as any);
    expect(alert.error).toHaveBeenCalledWith('ليس لديك صلاحية للوصول إلى هذه الصفحة');
  });

  it('admin routes need the admin role', async () => {
    perms.isAdmin.and.returnValue(false);
    expect(await run({admin: true})).toBe('/home' as any);
  });

  it('loads permissions first when not loaded yet', async () => {
    perms.isLoaded.and.returnValue(false);
    perms.load.and.returnValue(Promise.resolve());
    perms.can.and.returnValue(true);
    await run({permission: 'IMPORT_READ'});
    expect(perms.load).toHaveBeenCalled();
  });

  it('no token goes to login', async () => {
    sessionStorage.clear();
    expect(await run({permission: 'IMPORT_READ'})).toBe('/login' as any);
  });
});
