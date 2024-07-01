import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialMandateComponent } from './special-mandate.component';

describe('SpecialMandateComponent', () => {
  let component: SpecialMandateComponent;
  let fixture: ComponentFixture<SpecialMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialMandateComponent]
    });
    fixture = TestBed.createComponent(SpecialMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
