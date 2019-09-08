import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPopupComponent } from './reg-popup.component';

describe('RegPopupComponent', () => {
  let component: RegPopupComponent;
  let fixture: ComponentFixture<RegPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
