import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSignsPaginationComponent } from './all-signs-pagination.component';

describe('AllSignsPaginationComponent', () => {
  let component: AllSignsPaginationComponent;
  let fixture: ComponentFixture<AllSignsPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSignsPaginationComponent]
    });
    fixture = TestBed.createComponent(AllSignsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
