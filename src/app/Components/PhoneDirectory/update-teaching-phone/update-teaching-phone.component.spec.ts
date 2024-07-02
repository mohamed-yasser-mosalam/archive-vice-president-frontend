import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeachingPhoneComponent } from './update-teaching-phone.component';

describe('UpdateTeachingPhoneComponent', () => {
  let component: UpdateTeachingPhoneComponent;
  let fixture: ComponentFixture<UpdateTeachingPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTeachingPhoneComponent]
    });
    fixture = TestBed.createComponent(UpdateTeachingPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
