import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyThingComponent } from './any-thing.component';

describe('AnyThingComponent', () => {
  let component: AnyThingComponent;
  let fixture: ComponentFixture<AnyThingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnyThingComponent]
    });
    fixture = TestBed.createComponent(AnyThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
