/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatchdaysComponent } from './matchdays.component';

describe('MatchdaysComponent', () => {
  let component: MatchdaysComponent;
  let fixture: ComponentFixture<MatchdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
