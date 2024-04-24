import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavefileexportComponent } from './savefileexport.component';

describe('SavefileexportComponent', () => {
  let component: SavefileexportComponent;
  let fixture: ComponentFixture<SavefileexportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavefileexportComponent]
    });
    fixture = TestBed.createComponent(SavefileexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
