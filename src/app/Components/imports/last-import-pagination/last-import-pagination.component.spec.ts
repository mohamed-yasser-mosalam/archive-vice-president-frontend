import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastImportPaginationComponent } from './last-import-pagination.component';

describe('LastImportPaginationComponent', () => {
  let component: LastImportPaginationComponent;
  let fixture: ComponentFixture<LastImportPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastImportPaginationComponent]
    });
    fixture = TestBed.createComponent(LastImportPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
