import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPhoneDirectoryComponent } from './teaching-phone-directory.component';

describe('TeachingPhoneDirectoryComponent', () => {
  let component: TeachingPhoneDirectoryComponent;
  let fixture: ComponentFixture<TeachingPhoneDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachingPhoneDirectoryComponent]
    });
    fixture = TestBed.createComponent(TeachingPhoneDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
