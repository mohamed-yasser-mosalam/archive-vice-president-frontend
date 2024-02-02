import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImportComponent } from './update-import.component';

describe('UpdateImportComponent', () => {
  let component: UpdateImportComponent;
  let fixture: ComponentFixture<UpdateImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateImportComponent]
    });
    fixture = TestBed.createComponent(UpdateImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
