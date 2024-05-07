import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPaginationComponent } from './special-pagination.component';

describe('SpecialPaginationComponent', () => {
  let component: SpecialPaginationComponent;
  let fixture: ComponentFixture<SpecialPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialPaginationComponent]
    });
    fixture = TestBed.createComponent(SpecialPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
