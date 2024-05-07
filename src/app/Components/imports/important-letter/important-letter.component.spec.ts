import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantLetterComponent } from './important-letter.component';

describe('ImportantLetterComponent', () => {
  let component: ImportantLetterComponent;
  let fixture: ComponentFixture<ImportantLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantLetterComponent]
    });
    fixture = TestBed.createComponent(ImportantLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
