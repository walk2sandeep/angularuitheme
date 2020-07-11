import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletToBankComponent } from './wallet-to-bank.component';

describe('WalletToBankComponent', () => {
  let component: WalletToBankComponent;
  let fixture: ComponentFixture<WalletToBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletToBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletToBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
