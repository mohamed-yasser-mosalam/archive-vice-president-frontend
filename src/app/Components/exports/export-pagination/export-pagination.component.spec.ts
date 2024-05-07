import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPaginationComponent } from './export-pagination.component';

describe('ExportPaginationComponent', () => {
  let component: ExportPaginationComponent;
  let fixture: ComponentFixture<ExportPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportPaginationComponent]
    });
    fixture = TestBed.createComponent(ExportPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
