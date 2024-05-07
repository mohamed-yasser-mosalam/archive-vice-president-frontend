import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileHasGoneComponent } from './file-has-gone.component';

describe('FileHasGoneComponent', () => {
  let component: FileHasGoneComponent;
  let fixture: ComponentFixture<FileHasGoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileHasGoneComponent]
    });
    fixture = TestBed.createComponent(FileHasGoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
