import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {of} from 'rxjs';
import {RolesComponent} from './roles.component';
import {RoleService} from '../../../Services/roles/role.service';
import {AlertService} from '../../../Services/alert/alert.service';
import {Role} from '../../../Models/roles/role';

describe('RolesComponent', () => {
  let fixture: ComponentFixture<RolesComponent>;
  let c: RolesComponent;
  let roles: jasmine.SpyObj<RoleService>;

  const catalog = [{area: 'IMPORT', label: 'الوارد'}, {area: 'EXPORT', label: 'الصادر'}];
  const admin: Role = {id: 1, name: 'ROLE_ADMIN', displayName: 'مدير النظام', system: true, permissions: [], userCount: 1};
  const reader: Role = {id: 4, name: 'ROLE_CUSTOM_4', displayName: 'قارئ', system: false, permissions: ['IMPORT_READ'], userCount: 0};

  beforeEach(async () => {
    roles = jasmine.createSpyObj('RoleService', ['catalog', 'list', 'create', 'update', 'delete']);
    roles.catalog.and.returnValue(of(catalog));
    roles.list.and.returnValue(of([admin, reader]));
    roles.create.and.returnValue(of(reader));
    roles.update.and.returnValue(of(reader));
    const alert = jasmine.createSpyObj('AlertService', ['success', 'error', 'confirm']);
    alert.success.and.returnValue(Promise.resolve());
    await TestBed.configureTestingModule({
      declarations: [RolesComponent],
      imports: [FormsModule],
      providers: [{provide: RoleService, useValue: roles}, {provide: AlertService, useValue: alert}]
    }).compileComponents();
    fixture = TestBed.createComponent(RolesComponent);
    c = fixture.componentInstance;
    fixture.detectChanges();
    c.select(reader);
  });

  it('loads the selected role into the grid', () => {
    expect(c.grid['IMPORT']['READ']).toBeTrue();
    expect(c.grid['EXPORT']['READ']).toBeFalse();
  });

  it('ticking DELETE also ticks READ', () => {
    c.toggle('EXPORT', 'DELETE');
    expect(c.grid['EXPORT']['DELETE']).toBeTrue();
    expect(c.grid['EXPORT']['READ']).toBeTrue();
  });

  it('unticking READ clears the row', () => {
    c.toggle('EXPORT', 'EDIT');
    c.toggle('EXPORT', 'READ');
    expect(Object.values(c.grid['EXPORT']).some(v => v)).toBeFalse();
  });

  it('toggleColumn(EDIT) ticks EDIT and READ for every area', () => {
    c.toggleColumn('EDIT');
    for (const a of ['IMPORT', 'EXPORT']) {
      expect(c.grid[a]['EDIT']).toBeTrue();
      expect(c.grid[a]['READ']).toBeTrue();
    }
  });

  it('toggleRow fills then clears a row', () => {
    c.toggleRow('EXPORT');
    expect(Object.values(c.grid['EXPORT']).every(v => v)).toBeTrue();
    c.toggleRow('EXPORT');
    expect(Object.values(c.grid['EXPORT']).some(v => v)).toBeFalse();
  });

  it('save() on a new role sends only ticked permissions as AREA_ACTION', async () => {
    c.newRole();
    c.name = 'x';
    c.toggle('IMPORT', 'DELETE');
    await c.save();
    expect(roles.create).toHaveBeenCalledWith({displayName: 'x', permissions: ['IMPORT_READ', 'IMPORT_DELETE']});
  });

  it('save() on an existing role updates it', async () => {
    await c.save();
    expect(roles.update).toHaveBeenCalledWith(4, {displayName: 'قارئ', permissions: ['IMPORT_READ']});
  });

  it('system role grid is read-only', () => {
    c.select(admin);
    expect(c.readOnly).toBeTrue();
    c.toggle('EXPORT', 'DELETE');
    expect(c.grid['EXPORT']['DELETE']).toBeTrue(); // admin shows everything ticked
    c.toggleRow('EXPORT');
    expect(c.grid['EXPORT']['READ']).toBeTrue();
  });
});
