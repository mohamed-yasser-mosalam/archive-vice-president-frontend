import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import baseUrl from '../../url';

export interface MyPermissions {
  role: string | null;
  roleDisplayName: string | null;
  admin: boolean;
  permissions: string[];
}

/** Holds what the logged-in user may do, loaded fresh from the server. */
@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private granted = new Set<string>();
  private admin = false;
  private role = '';
  private loaded = false;

  constructor(private http: HttpClient) {
  }

  async load(): Promise<void> {
    try {
      const me = await firstValueFrom(this.http.get<MyPermissions>(`${baseUrl}/user/me/permissions`));
      this.granted = new Set(me.permissions ?? []);
      this.admin = !!me.admin;
      this.role = me.roleDisplayName ?? '';
      this.loaded = true;
    } catch {
      this.clear();
    }
  }

  can(permission: string): boolean {
    return this.admin || this.granted.has(permission);
  }

  canAny(...permissions: string[]): boolean {
    return permissions.some(p => this.can(p));
  }

  isAdmin(): boolean {
    return this.admin;
  }

  isLoaded(): boolean {
    return this.loaded;
  }

  roleName(): string {
    return this.role;
  }

  clear(): void {
    this.granted = new Set();
    this.admin = false;
    this.role = '';
    this.loaded = false;
  }
}
