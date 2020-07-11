import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AEPSComponent } from './aeps.component';

describe('AEPSComponent', () => {
  let component: AEPSComponent;
  let fixture: ComponentFixture<AEPSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AEPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AEPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
