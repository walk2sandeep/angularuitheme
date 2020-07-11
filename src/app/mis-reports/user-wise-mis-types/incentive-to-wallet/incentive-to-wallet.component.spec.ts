import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveToWalletComponent } from './incentive-to-wallet.component';

describe('IncentiveToWalletComponent', () => {
  let component: IncentiveToWalletComponent;
  let fixture: ComponentFixture<IncentiveToWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentiveToWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentiveToWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
