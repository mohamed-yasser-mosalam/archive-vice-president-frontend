import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastExportComponent } from './last-export.component';

describe('LastExportComponent', () => {
  let component: LastExportComponent;
  let fixture: ComponentFixture<LastExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastExportComponent]
    });
    fixture = TestBed.createComponent(LastExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
