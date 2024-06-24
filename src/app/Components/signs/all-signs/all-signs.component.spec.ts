import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSignsComponent } from './all-signs.component';

describe('AllSignsComponent', () => {
  let component: AllSignsComponent;
  let fixture: ComponentFixture<AllSignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSignsComponent]
    });
    fixture = TestBed.createComponent(AllSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
