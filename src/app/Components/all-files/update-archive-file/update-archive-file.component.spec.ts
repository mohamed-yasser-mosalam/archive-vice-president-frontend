import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArchiveFileComponent } from './update-archive-file.component';

describe('UpdateArchiveFileComponent', () => {
  let component: UpdateArchiveFileComponent;
  let fixture: ComponentFixture<UpdateArchiveFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateArchiveFileComponent]
    });
    fixture = TestBed.createComponent(UpdateArchiveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
