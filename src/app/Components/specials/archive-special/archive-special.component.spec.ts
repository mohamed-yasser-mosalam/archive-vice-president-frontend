import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveSpecialComponent } from './archive-special.component';

describe('ArchiveSpecialComponent', () => {
  let component: ArchiveSpecialComponent;
  let fixture: ComponentFixture<ArchiveSpecialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveSpecialComponent]
    });
    fixture = TestBed.createComponent(ArchiveSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
