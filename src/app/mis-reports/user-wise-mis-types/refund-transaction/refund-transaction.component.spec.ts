import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundTransactionComponent } from './refund-transaction.component';

describe('RefundTransactionComponent', () => {
  let component: RefundTransactionComponent;
  let fixture: ComponentFixture<RefundTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
