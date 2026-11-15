import {Component, OnInit} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import {RoleService} from '../../../Services/roles/role.service';
import {AlertService} from '../../../Services/alert/alert.service';
import {CatalogEntry, Role} from '../../../Models/roles/role';

export type Action = 'READ' | 'CREATE' | 'EDIT' | 'DELETE';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  readonly actions: { key: Action, label: string }[] = [
    {key: 'READ', label: 'قراءة'},
    {key: 'CREATE', label: 'إضافة'},
    {key: 'EDIT', label: 'تعديل'},
    {key: 'DELETE', label: 'حذف'}
  ];

  catalog: CatalogEntry[] = [];
  roles: Role[] = [];
  selected: Role | null = null;
  name = '';
  grid: Record<string, Record<Action, boolean>> = {};
  busy = false;

  constructor(private roleService: RoleService, private alert: AlertService) {
  }

  ngOnInit(): void {
    this.roleService.catalog().subscribe(c => {
      this.catalog = c;
      this.reload();
    });
  }

  get readOnly(): boolean {
    return !!this.selected?.system;
  }

  get isNew(): boolean {
    return !!this.selected && this.selected.id === null;
  }

  reload(selectId?: number | null): void {
    this.roleService.list().subscribe(r => {
      this.roles = r;
      const next = r.find(x => x.id === selectId) ?? (this.selected ? r.find(x => x.id === this.selected!.id) : undefined) ?? r[0];
      if (next) this.select(next);
    });
  }

  select(role: Role): void {
    this.selected = role;
    this.name = role.displayName;
    this.grid = this.emptyGrid();
    if (role.system) {
      for (const c of this.catalog) this.actions.forEach(a => this.grid[c.area][a.key] = true);
      return;
    }
    for (const p of role.permissions) {
      const i = p.lastIndexOf('_');
      const area = p.substring(0, i);
      const action = p.substring(i + 1) as Action;
      if (this.grid[area]) this.grid[area][action] = true;
    }
  }

  newRole(): void {
    this.select({id: null, displayName: '', system: false, permissions: [], userCount: 0});
  }

  toggle(area: string, action: Action): void {
    if (this.readOnly) return;
    const row = this.grid[area];
    if (action === 'READ' && row.READ) {
      this.actions.forEach(a => row[a.key] = false);
      return;
    }
    row[action] = !row[action];
    if (row[action]) row.READ = true;
  }

  toggleRow(area: string): void {
    if (this.readOnly) return;
    const row = this.grid[area];
    const all = this.actions.every(a => row[a.key]);
    this.actions.forEach(a => row[a.key] = !all);
  }

  toggleColumn(action: Action): void {
    if (this.readOnly) return;
    const all = this.catalog.every(c => this.grid[c.area][action]);
    for (const c of this.catalog) {
      if (all) {
        if (action === 'READ') this.actions.forEach(a => this.grid[c.area][a.key] = false);
        else this.grid[c.area][action] = false;
      } else {
        this.grid[c.area][action] = true;
        this.grid[c.area].READ = true;
      }
    }
  }

  rowChecked(area: string): boolean {
    return this.actions.every(a => this.grid[area][a.key]);
  }

  columnChecked(action: Action): boolean {
    return this.catalog.length > 0 && this.catalog.every(c => this.grid[c.area][action]);
  }

  permissions(): string[] {
    const out: string[] = [];
    for (const c of this.catalog)
      for (const a of this.actions)
        if (this.grid[c.area][a.key]) out.push(`${c.area}_${a.key}`);
    return out;
  }

  async save(): Promise<void> {
    if (!this.selected || this.readOnly) return;
    const request = {displayName: this.name.trim(), permissions: this.permissions()};
    this.busy = true;
    try {
      const saved = this.selected.id === null
        ? await firstValueFrom(this.roleService.create(request))
        : await firstValueFrom(this.roleService.update(this.selected.id, request));
      await this.alert.success('تم حفظ الدور بنجاح');
      this.reload(saved.id);
    } catch (e) {
      await this.alert.error(e);
    } finally {
      this.busy = false;
    }
  }

  async remove(): Promise<void> {
    if (!this.selected || this.readOnly || this.selected.id === null) return;
    if (!await this.alert.confirm(`هل تريد حذف الدور "${this.selected.displayName}"؟`)) return;
    this.busy = true;
    try {
      await firstValueFrom(this.roleService.delete(this.selected.id));
      this.selected = null;
      await this.alert.success('تم حذف الدور');
      this.reload();
    } catch (e) {
      await this.alert.error(e);
    } finally {
      this.busy = false;
    }
  }

  private emptyGrid(): Record<string, Record<Action, boolean>> {
    const g: Record<string, Record<Action, boolean>> = {};
    for (const c of this.catalog)
      g[c.area] = {READ: false, CREATE: false, EDIT: false, DELETE: false};
    return g;
  }
}
