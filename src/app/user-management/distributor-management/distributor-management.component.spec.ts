import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorManagementComponent } from './distributor-management.component';

describe('DistributorManagementComponent', () => {
  let component: DistributorManagementComponent;
  let fixture: ComponentFixture<DistributorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
