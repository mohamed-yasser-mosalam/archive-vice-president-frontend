import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacultyPhoneComponent } from './add-faculty-phone.component';

describe('AddFacultyPhoneComponent', () => {
  let component: AddFacultyPhoneComponent;
  let fixture: ComponentFixture<AddFacultyPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFacultyPhoneComponent]
    });
    fixture = TestBed.createComponent(AddFacultyPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
