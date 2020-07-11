import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveAndTdsHistoryComponent } from './incentive-and-tds-history.component';

describe('IncentiveAndTdsHistoryComponent', () => {
  let component: IncentiveAndTdsHistoryComponent;
  let fixture: ComponentFixture<IncentiveAndTdsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentiveAndTdsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentiveAndTdsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
