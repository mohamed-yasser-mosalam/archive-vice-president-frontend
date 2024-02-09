import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialfileComponent } from './specialfile.component';

describe('SpecialfileComponent', () => {
  let component: SpecialfileComponent;
  let fixture: ComponentFixture<SpecialfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialfileComponent]
    });
    fixture = TestBed.createComponent(SpecialfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
