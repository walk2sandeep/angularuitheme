import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicWiseMisComponent } from './servic-wise-mis.component';

describe('ServicWiseMisComponent', () => {
  let component: ServicWiseMisComponent;
  let fixture: ComponentFixture<ServicWiseMisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicWiseMisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicWiseMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
