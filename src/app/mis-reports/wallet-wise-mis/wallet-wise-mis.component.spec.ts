import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletWiseMisComponent } from './wallet-wise-mis.component';

describe('WalletWiseMisComponent', () => {
  let component: WalletWiseMisComponent;
  let fixture: ComponentFixture<WalletWiseMisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWiseMisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletWiseMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
