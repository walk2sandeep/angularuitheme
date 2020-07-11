import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingMisComponent } from './onboarding-mis.component';

describe('OnboardingMisComponent', () => {
  let component: OnboardingMisComponent;
  let fixture: ComponentFixture<OnboardingMisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingMisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
