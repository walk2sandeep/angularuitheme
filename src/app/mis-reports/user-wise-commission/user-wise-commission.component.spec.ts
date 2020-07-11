import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWiseCommissionComponent } from './user-wise-commission.component';

describe('UserWiseCommissionComponent', () => {
  let component: UserWiseCommissionComponent;
  let fixture: ComponentFixture<UserWiseCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWiseCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWiseCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
