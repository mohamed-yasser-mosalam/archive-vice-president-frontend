import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileHadGoneComponent } from './file-had-gone.component';

describe('FileHadGoneComponent', () => {
  let component: FileHadGoneComponent;
  let fixture: ComponentFixture<FileHadGoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileHadGoneComponent]
    });
    fixture = TestBed.createComponent(FileHadGoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
