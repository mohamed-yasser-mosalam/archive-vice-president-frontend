import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNotComeComponent } from './file-not-come.component';

describe('FileNotComeComponent', () => {
  let component: FileNotComeComponent;
  let fixture: ComponentFixture<FileNotComeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileNotComeComponent]
    });
    fixture = TestBed.createComponent(FileNotComeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
