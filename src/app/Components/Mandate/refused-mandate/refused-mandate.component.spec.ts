import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefusedMandateComponent } from './refused-mandate.component';

describe('RefusedMandateComponent', () => {
  let component: RefusedMandateComponent;
  let fixture: ComponentFixture<RefusedMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefusedMandateComponent]
    });
    fixture = TestBed.createComponent(RefusedMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
