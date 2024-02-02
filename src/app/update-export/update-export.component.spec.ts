import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExportComponent } from './update-export.component';

describe('UpdateExportComponent', () => {
  let component: UpdateExportComponent;
  let fixture: ComponentFixture<UpdateExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateExportComponent]
    });
    fixture = TestBed.createComponent(UpdateExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
