import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSignComponent } from './all-sign.component';

describe('AllSignComponent', () => {
  let component: AllSignComponent;
  let fixture: ComponentFixture<AllSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSignComponent]
    });
    fixture = TestBed.createComponent(AllSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
