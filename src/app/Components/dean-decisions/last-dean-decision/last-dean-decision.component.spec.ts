import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDeanDecisionComponent } from './last-dean-decision.component';

describe('LastDeanDecisionComponent', () => {
  let component: LastDeanDecisionComponent;
  let fixture: ComponentFixture<LastDeanDecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastDeanDecisionComponent]
    });
    fixture = TestBed.createComponent(LastDeanDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
