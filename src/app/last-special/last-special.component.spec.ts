import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSpecialComponent } from './last-special.component';

describe('LastSpecialComponent', () => {
  let component: LastSpecialComponent;
  let fixture: ComponentFixture<LastSpecialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastSpecialComponent]
    });
    fixture = TestBed.createComponent(LastSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
