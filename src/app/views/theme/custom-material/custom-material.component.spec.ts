import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMaterialComponent } from './custom-material.component';

describe('CustomMaterialComponent', () => {
  let component: CustomMaterialComponent;
  let fixture: ComponentFixture<CustomMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
