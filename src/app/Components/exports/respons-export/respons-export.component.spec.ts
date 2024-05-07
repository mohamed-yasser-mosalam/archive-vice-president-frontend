import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsExportComponent } from './respons-export.component';

describe('ResponsExportComponent', () => {
  let component: ResponsExportComponent;
  let fixture: ComponentFixture<ResponsExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsExportComponent]
    });
    fixture = TestBed.createComponent(ResponsExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
