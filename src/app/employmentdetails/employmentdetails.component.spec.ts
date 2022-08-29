import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentdetailsComponent } from './employmentdetails.component';

describe('EmploymentdetailsComponent', () => {
  let component: EmploymentdetailsComponent;
  let fixture: ComponentFixture<EmploymentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
