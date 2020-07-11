import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSupportMisComponent } from './help-support-mis.component';

describe('HelpSupportMisComponent', () => {
  let component: HelpSupportMisComponent;
  let fixture: ComponentFixture<HelpSupportMisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpSupportMisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpSupportMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
