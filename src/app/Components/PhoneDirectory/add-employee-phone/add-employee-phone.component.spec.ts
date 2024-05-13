import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeePhoneComponent } from './add-employee-phone.component';

describe('AddEmployeePhoneComponent', () => {
  let component: AddEmployeePhoneComponent;
  let fixture: ComponentFixture<AddEmployeePhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeePhoneComponent]
    });
    fixture = TestBed.createComponent(AddEmployeePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
