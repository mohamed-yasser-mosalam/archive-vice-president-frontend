import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDeanDecisionPaginationComponent } from './last-dean-decision-pagination.component';

describe('LastDeanDecisionPaginationComponent', () => {
  let component: LastDeanDecisionPaginationComponent;
  let fixture: ComponentFixture<LastDeanDecisionPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastDeanDecisionPaginationComponent]
    });
    fixture = TestBed.createComponent(LastDeanDecisionPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
