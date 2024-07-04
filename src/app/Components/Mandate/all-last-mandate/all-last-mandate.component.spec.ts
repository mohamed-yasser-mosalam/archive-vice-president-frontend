import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLastMandateComponent } from './all-last-mandate.component';

describe('AllLastMandateComponent', () => {
  let component: AllLastMandateComponent;
  let fixture: ComponentFixture<AllLastMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllLastMandateComponent]
    });
    fixture = TestBed.createComponent(AllLastMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
