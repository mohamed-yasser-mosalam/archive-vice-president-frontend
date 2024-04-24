import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavefileimportComponent } from './savefileimport.component';

describe('SavefileimportComponent', () => {
  let component: SavefileimportComponent;
  let fixture: ComponentFixture<SavefileimportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavefileimportComponent]
    });
    fixture = TestBed.createComponent(SavefileimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
