import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoginInformatioComponent } from './update-login-informatio.component';

describe('UpdateLoginInformatioComponent', () => {
  let component: UpdateLoginInformatioComponent;
  let fixture: ComponentFixture<UpdateLoginInformatioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLoginInformatioComponent]
    });
    fixture = TestBed.createComponent(UpdateLoginInformatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
