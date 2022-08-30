import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardloanComponent } from './userdashboardloan.component';

describe('UserdashboardloanComponent', () => {
  let component: UserdashboardloanComponent;
  let fixture: ComponentFixture<UserdashboardloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdashboardloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdashboardloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
