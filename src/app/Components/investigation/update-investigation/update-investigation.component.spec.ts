import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvestigationComponent } from './update-investigation.component';

describe('UpdateInvestigationComponent', () => {
  let component: UpdateInvestigationComponent;
  let fixture: ComponentFixture<UpdateInvestigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInvestigationComponent]
    });
    fixture = TestBed.createComponent(UpdateInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
