import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMandateComponent } from './current-mandate.component';

describe('CurrentMandateComponent', () => {
  let component: CurrentMandateComponent;
  let fixture: ComponentFixture<CurrentMandateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentMandateComponent]
    });
    fixture = TestBed.createComponent(CurrentMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
