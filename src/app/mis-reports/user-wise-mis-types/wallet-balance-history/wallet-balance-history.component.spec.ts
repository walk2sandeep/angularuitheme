import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBalanceHistoryComponent } from './wallet-balance-history.component';

describe('WalletBalanceHistoryComponent', () => {
  let component: WalletBalanceHistoryComponent;
  let fixture: ComponentFixture<WalletBalanceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBalanceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBalanceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
