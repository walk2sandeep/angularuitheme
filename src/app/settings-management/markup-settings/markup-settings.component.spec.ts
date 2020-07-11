import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupSettingsComponent } from './markup-settings.component';

describe('MarkupSettingsComponent', () => {
  let component: MarkupSettingsComponent;
  let fixture: ComponentFixture<MarkupSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkupSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
