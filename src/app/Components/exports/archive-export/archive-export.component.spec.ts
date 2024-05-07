import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveExportComponent } from './archive-export.component';

describe('ArchiveExportComponent', () => {
  let component: ArchiveExportComponent;
  let fixture: ComponentFixture<ArchiveExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveExportComponent]
    });
    fixture = TestBed.createComponent(ArchiveExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
