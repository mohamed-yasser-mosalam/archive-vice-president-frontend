import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPhoneDirectoryComponent } from './faculty-phone-directory.component';

describe('FacultyPhoneDirectoryComponent', () => {
  let component: FacultyPhoneDirectoryComponent;
  let fixture: ComponentFixture<FacultyPhoneDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyPhoneDirectoryComponent]
    });
    fixture = TestBed.createComponent(FacultyPhoneDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
