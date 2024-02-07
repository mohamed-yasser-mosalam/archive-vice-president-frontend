import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayImportsComponent } from './today-imports.component';

describe('TodayImportsComponent', () => {
  let component: TodayImportsComponent;
  let fixture: ComponentFixture<TodayImportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayImportsComponent]
    });
    fixture = TestBed.createComponent(TodayImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
