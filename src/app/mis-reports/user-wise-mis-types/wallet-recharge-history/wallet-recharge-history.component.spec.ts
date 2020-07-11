import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletRechargeHistoryComponent } from './wallet-recharge-history.component';

describe('WalletRechargeHistoryComponent', () => {
  let component: WalletRechargeHistoryComponent;
  let fixture: ComponentFixture<WalletRechargeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletRechargeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletRechargeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
