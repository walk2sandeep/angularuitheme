import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisReportsComponent } from './mis-reports.component';

describe('MisReportsComponent', () => {
  let component: MisReportsComponent;
  let fixture: ComponentFixture<MisReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
