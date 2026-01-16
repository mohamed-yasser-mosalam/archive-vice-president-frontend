import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInvestigationComponent } from './insert-investigation.component';

describe('InsertInvestigationComponent', () => {
  let component: InsertInvestigationComponent;
  let fixture: ComponentFixture<InsertInvestigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertInvestigationComponent]
    });
    fixture = TestBed.createComponent(InsertInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
