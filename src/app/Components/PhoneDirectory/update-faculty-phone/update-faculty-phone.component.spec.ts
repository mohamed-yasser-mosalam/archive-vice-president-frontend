import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacultyPhoneComponent } from './update-faculty-phone.component';

describe('UpdateFacultyPhoneComponent', () => {
  let component: UpdateFacultyPhoneComponent;
  let fixture: ComponentFixture<UpdateFacultyPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFacultyPhoneComponent]
    });
    fixture = TestBed.createComponent(UpdateFacultyPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
