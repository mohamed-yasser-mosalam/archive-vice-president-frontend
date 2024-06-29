import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMandateComponent } from './add-mandate.component';

describe('AddMandateComponent', () => {
  let component: AddMandateComponent;
  let fixture: ComponentFixture<AddMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMandateComponent]
    });
    fixture = TestBed.createComponent(AddMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
