import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPaginationComponent } from './import-pagination.component';

describe('ImportPaginationComponent', () => {
  let component: ImportPaginationComponent;
  let fixture: ComponentFixture<ImportPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportPaginationComponent]
    });
    fixture = TestBed.createComponent(ImportPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
