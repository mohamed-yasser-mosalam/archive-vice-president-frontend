import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveImportComponent } from './archive-import.component';

describe('ArchiveImportComponent', () => {
  let component: ArchiveImportComponent;
  let fixture: ComponentFixture<ArchiveImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveImportComponent]
    });
    fixture = TestBed.createComponent(ArchiveImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
