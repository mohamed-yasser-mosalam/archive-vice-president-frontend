import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastExportPaginationComponent } from './last-export-pagination.component';

describe('LastExportPaginationComponent', () => {
  let component: LastExportPaginationComponent;
  let fixture: ComponentFixture<LastExportPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastExportPaginationComponent]
    });
    fixture = TestBed.createComponent(LastExportPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
