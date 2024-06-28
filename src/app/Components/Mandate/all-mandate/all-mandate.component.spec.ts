import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMandateComponent } from './all-mandate.component';

describe('AllMandateComponent', () => {
  let component: AllMandateComponent;
  let fixture: ComponentFixture<AllMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMandateComponent]
    });
    fixture = TestBed.createComponent(AllMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
