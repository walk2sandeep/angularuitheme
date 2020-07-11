import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedHistoryComponent } from './reserved-history.component';

describe('ReservedHistoryComponent', () => {
  let component: ReservedHistoryComponent;
  let fixture: ComponentFixture<ReservedHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
