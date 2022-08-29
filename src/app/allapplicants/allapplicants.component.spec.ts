import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllapplicantsComponent } from './allapplicants.component';

describe('AllapplicantsComponent', () => {
  let component: AllapplicantsComponent;
  let fixture: ComponentFixture<AllapplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllapplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
