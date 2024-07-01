import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialUniversityComponent } from './add-special-university.component';

describe('AddSpecialUniversityComponent', () => {
  let component: AddSpecialUniversityComponent;
  let fixture: ComponentFixture<AddSpecialUniversityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSpecialUniversityComponent]
    });
    fixture = TestBed.createComponent(AddSpecialUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
