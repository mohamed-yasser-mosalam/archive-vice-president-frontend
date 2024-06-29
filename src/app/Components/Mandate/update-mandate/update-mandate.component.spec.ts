import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMandateComponent } from './update-mandate.component';

describe('UpdateMandateComponent', () => {
  let component: UpdateMandateComponent;
  let fixture: ComponentFixture<UpdateMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMandateComponent]
    });
    fixture = TestBed.createComponent(UpdateMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
