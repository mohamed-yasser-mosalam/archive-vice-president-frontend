import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecialComponent } from './update-special.component';

describe('UpdateSpecialComponent', () => {
  let component: UpdateSpecialComponent;
  let fixture: ComponentFixture<UpdateSpecialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSpecialComponent]
    });
    fixture = TestBed.createComponent(UpdateSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
