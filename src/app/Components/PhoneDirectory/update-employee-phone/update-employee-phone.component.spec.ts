import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeePhoneComponent } from './update-employee-phone.component';

describe('UpdateEmployeePhoneComponent', () => {
  let component: UpdateEmployeePhoneComponent;
  let fixture: ComponentFixture<UpdateEmployeePhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeePhoneComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
