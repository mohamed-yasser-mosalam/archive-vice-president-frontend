import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastImportComponent } from './last-import.component';

describe('LastImportComponent', () => {
  let component: LastImportComponent;
  let fixture: ComponentFixture<LastImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastImportComponent]
    });
    fixture = TestBed.createComponent(LastImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
