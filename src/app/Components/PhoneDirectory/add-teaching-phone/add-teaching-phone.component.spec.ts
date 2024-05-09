import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeachingPhoneComponent } from './add-teaching-phone.component';

describe('AddTeachingPhoneComponent', () => {
  let component: AddTeachingPhoneComponent;
  let fixture: ComponentFixture<AddTeachingPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTeachingPhoneComponent]
    });
    fixture = TestBed.createComponent(AddTeachingPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
