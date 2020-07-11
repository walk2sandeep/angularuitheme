import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveToWalletSettingsComponent } from './incentive-to-wallet-settings.component';

describe('IncentiveToWalletSettingsComponent', () => {
  let component: IncentiveToWalletSettingsComponent;
  let fixture: ComponentFixture<IncentiveToWalletSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentiveToWalletSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentiveToWalletSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
