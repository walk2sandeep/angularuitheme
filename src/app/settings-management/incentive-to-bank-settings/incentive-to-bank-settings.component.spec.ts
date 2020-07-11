import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveToBankSettingsComponent } from './incentive-to-bank-settings.component';

describe('IncentiveToBankSettingsComponent', () => {
  let component: IncentiveToBankSettingsComponent;
  let fixture: ComponentFixture<IncentiveToBankSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentiveToBankSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentiveToBankSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
