import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedeandecisionComponent } from './updatedeandecision.component';

describe('UpdatedeandecisionComponent', () => {
  let component: UpdatedeandecisionComponent;
  let fixture: ComponentFixture<UpdatedeandecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedeandecisionComponent]
    });
    fixture = TestBed.createComponent(UpdatedeandecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
