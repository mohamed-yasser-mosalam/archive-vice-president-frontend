import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router} from '@angular/router';
import {PermissionService} from './permission.service';
import {AlertService} from '../alert/alert.service';

/**
 * Route guard: `data: {permission: 'IMPORT_READ'}` or `data: {admin: true}`.
 * Sends users without a token to /login and users without the permission to /home.
 */
export const permissionGuard: CanActivateFn = async (route: ActivatedRouteSnapshot) => {
  const perms = inject(PermissionService);
  const router = inject(Router);
  const alert = inject(AlertService);

  if (!sessionStorage.getItem('token'))
    return router.parseUrl('/login');
  if (!perms.isLoaded())
    await perms.load();

  const needed: string | undefined = route.data?.['permission'];
  const adminOnly = route.data?.['admin'] === true;
  const allowed = adminOnly ? perms.isAdmin() : (!needed || perms.can(needed));
  if (allowed)
    return true;

  alert.error('ليس لديك صلاحية للوصول إلى هذه الصفحة');
  return router.parseUrl('/home');
};
