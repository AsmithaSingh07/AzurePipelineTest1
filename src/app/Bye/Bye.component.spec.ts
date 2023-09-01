/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ByeComponent } from './Bye.component';

describe('ByeComponent', () => {
  let component: ByeComponent;
  let fixture: ComponentFixture<ByeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
