import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePhoneDirectoryComponent } from './employee-phone-directory.component';

describe('EmployeePhoneDirectoryComponent', () => {
  let component: EmployeePhoneDirectoryComponent;
  let fixture: ComponentFixture<EmployeePhoneDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeePhoneDirectoryComponent]
    });
    fixture = TestBed.createComponent(EmployeePhoneDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
