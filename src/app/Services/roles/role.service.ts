import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import baseUrl from '../../url';
import {CatalogEntry, Role, RoleRequest} from '../../Models/roles/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private base = baseUrl;

  constructor(private http: HttpClient) {
  }

  catalog(): Observable<CatalogEntry[]> {
    return this.http.get<CatalogEntry[]>(`${this.base}/permissions/catalog`);
  }

  list(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.base}/roles`);
  }

  create(r: RoleRequest): Observable<Role> {
    return this.http.post<Role>(`${this.base}/roles`, r);
  }

  update(id: number, r: RoleRequest): Observable<Role> {
    return this.http.put<Role>(`${this.base}/roles/${id}`, r);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/roles/${id}`);
  }

  assign(userId: number, roleId: number): Observable<void> {
    return this.http.put<void>(`${this.base}/user/${userId}/role`, {roleId});
  }
}
