import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayExportsComponent } from './today-exports.component';

describe('TodayExportsComponent', () => {
  let component: TodayExportsComponent;
  let fixture: ComponentFixture<TodayExportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayExportsComponent]
    });
    fixture = TestBed.createComponent(TodayExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
