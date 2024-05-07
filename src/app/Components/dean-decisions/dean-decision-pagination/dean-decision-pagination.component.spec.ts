import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanDecisionPaginationComponent } from './dean-decision-pagination.component';

describe('DeanDecisionPaginationComponent', () => {
  let component: DeanDecisionPaginationComponent;
  let fixture: ComponentFixture<DeanDecisionPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeanDecisionPaginationComponent]
    });
    fixture = TestBed.createComponent(DeanDecisionPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
