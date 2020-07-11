import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveToBankComponent } from './incentive-to-bank.component';

describe('IncentiveToBankComponent', () => {
  let component: IncentiveToBankComponent;
  let fixture: ComponentFixture<IncentiveToBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentiveToBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentiveToBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
