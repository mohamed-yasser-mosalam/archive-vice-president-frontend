import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSpecialPaginationComponent } from './last-special-pagination.component';

describe('LastSpecialPaginationComponent', () => {
  let component: LastSpecialPaginationComponent;
  let fixture: ComponentFixture<LastSpecialPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastSpecialPaginationComponent]
    });
    fixture = TestBed.createComponent(LastSpecialPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
