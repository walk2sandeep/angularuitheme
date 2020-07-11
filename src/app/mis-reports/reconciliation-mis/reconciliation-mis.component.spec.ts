import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationMisComponent } from './reconciliation-mis.component';

describe('ReconciliationMisComponent', () => {
  let component: ReconciliationMisComponent;
  let fixture: ComponentFixture<ReconciliationMisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationMisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
