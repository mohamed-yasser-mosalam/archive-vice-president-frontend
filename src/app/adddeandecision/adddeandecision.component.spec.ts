import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeandecisionComponent } from './adddeandecision.component';

describe('AdddeandecisionComponent', () => {
  let component: AdddeandecisionComponent;
  let fixture: ComponentFixture<AdddeandecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddeandecisionComponent]
    });
    fixture = TestBed.createComponent(AdddeandecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
