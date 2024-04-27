import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSignComponent } from './update-sign.component';

describe('UpdateSignComponent', () => {
  let component: UpdateSignComponent;
  let fixture: ComponentFixture<UpdateSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSignComponent]
    });
    fixture = TestBed.createComponent(UpdateSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
