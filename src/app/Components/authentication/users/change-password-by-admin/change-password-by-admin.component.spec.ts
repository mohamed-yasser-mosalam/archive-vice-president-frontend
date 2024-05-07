import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordByAdminComponent } from './change-password-by-admin.component';

describe('ChangePasswordByAdminComponent', () => {
  let component: ChangePasswordByAdminComponent;
  let fixture: ComponentFixture<ChangePasswordByAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordByAdminComponent]
    });
    fixture = TestBed.createComponent(ChangePasswordByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
