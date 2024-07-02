import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSpecialMandateComponent } from './un-special-mandate.component';

describe('UnSpecialMandateComponent', () => {
  let component: UnSpecialMandateComponent;
  let fixture: ComponentFixture<UnSpecialMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnSpecialMandateComponent]
    });
    fixture = TestBed.createComponent(UnSpecialMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
