import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTSettingsComponent } from './gst-settings.component';

describe('GSTSettingsComponent', () => {
  let component: GSTSettingsComponent;
  let fixture: ComponentFixture<GSTSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSTSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSTSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
