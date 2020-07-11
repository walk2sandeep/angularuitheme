import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeWiseMisComponent } from './user-type-wise-mis.component';

describe('UserTypeWiseMisComponent', () => {
  let component: UserTypeWiseMisComponent;
  let fixture: ComponentFixture<UserTypeWiseMisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTypeWiseMisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeWiseMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
