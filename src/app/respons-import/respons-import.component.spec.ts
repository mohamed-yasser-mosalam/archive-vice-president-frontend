import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsImportComponent } from './respons-import.component';

describe('ResponsImportComponent', () => {
  let component: ResponsImportComponent;
  let fixture: ComponentFixture<ResponsImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsImportComponent]
    });
    fixture = TestBed.createComponent(ResponsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
