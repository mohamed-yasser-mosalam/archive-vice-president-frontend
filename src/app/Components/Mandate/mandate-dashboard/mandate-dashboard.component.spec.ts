import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateDashboardComponent } from './mandate-dashboard.component';

describe('MandateDashboardComponent', () => {
  let component: MandateDashboardComponent;
  let fixture: ComponentFixture<MandateDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MandateDashboardComponent]
    });
    fixture = TestBed.createComponent(MandateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
