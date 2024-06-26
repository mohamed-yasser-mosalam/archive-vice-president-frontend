import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfSpecificYearComponent } from './letter-of-specific-year.component';

describe('LetterOfSpecificYearComponent', () => {
  let component: LetterOfSpecificYearComponent;
  let fixture: ComponentFixture<LetterOfSpecificYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterOfSpecificYearComponent]
    });
    fixture = TestBed.createComponent(LetterOfSpecificYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
