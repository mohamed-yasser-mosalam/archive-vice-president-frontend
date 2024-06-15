import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArchiveFileComponent } from './add-archive-file.component';

describe('AddArchiveFileComponent', () => {
  let component: AddArchiveFileComponent;
  let fixture: ComponentFixture<AddArchiveFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddArchiveFileComponent]
    });
    fixture = TestBed.createComponent(AddArchiveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
