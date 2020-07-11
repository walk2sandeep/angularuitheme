import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableHistoryComponent } from './receivable-history.component';

describe('ReceivableHistoryComponent', () => {
  let component: ReceivableHistoryComponent;
  let fixture: ComponentFixture<ReceivableHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivableHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivableHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
