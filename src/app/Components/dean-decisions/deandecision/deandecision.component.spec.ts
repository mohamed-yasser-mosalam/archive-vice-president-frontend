import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeandecisionComponent } from './deandecision.component';

describe('DeandecisionComponent', () => {
  let component: DeandecisionComponent;
  let fixture: ComponentFixture<DeandecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeandecisionComponent]
    });
    fixture = TestBed.createComponent(DeandecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
