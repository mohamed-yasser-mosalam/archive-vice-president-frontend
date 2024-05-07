import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentExportComponent } from './urgent-export.component';

describe('UrgentExportComponent', () => {
  let component: UrgentExportComponent;
  let fixture: ComponentFixture<UrgentExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrgentExportComponent]
    });
    fixture = TestBed.createComponent(UrgentExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
