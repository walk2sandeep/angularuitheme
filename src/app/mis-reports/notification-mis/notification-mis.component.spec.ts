import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMisComponent } from './notification-mis.component';

describe('NotificationMisComponent', () => {
  let component: NotificationMisComponent;
  let fixture: ComponentFixture<NotificationMisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationMisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
