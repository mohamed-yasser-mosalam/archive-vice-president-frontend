import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPaginationComponent } from './sign-pagination.component';

describe('SignPaginationComponent', () => {
  let component: SignPaginationComponent;
  let fixture: ComponentFixture<SignPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignPaginationComponent]
    });
    fixture = TestBed.createComponent(SignPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
