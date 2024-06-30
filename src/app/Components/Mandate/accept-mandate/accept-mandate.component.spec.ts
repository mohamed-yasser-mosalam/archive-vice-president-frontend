import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptMandateComponent } from './accept-mandate.component';

describe('AcceptMandateComponent', () => {
  let component: AcceptMandateComponent;
  let fixture: ComponentFixture<AcceptMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptMandateComponent]
    });
    fixture = TestBed.createComponent(AcceptMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
