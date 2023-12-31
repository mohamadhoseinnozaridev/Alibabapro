/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BreakingNewsComponent } from './breakingNews.component';

describe('BreakingNewsComponent', () => {
  let component: BreakingNewsComponent;
  let fixture: ComponentFixture<BreakingNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakingNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
