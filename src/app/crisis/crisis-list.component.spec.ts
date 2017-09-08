import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { CrisisService, Crisis } from './crisis.service';
import { CrisisListComponent } from './crisis-list.component';
import { moduleConfig } from './crisis.module';

describe('Test crisis list component', () => {

  let comp:    CrisisListComponent;
  let fixture: ComponentFixture<CrisisListComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule(moduleConfig);

    fixture = TestBed.createComponent(CrisisListComponent);

    comp = fixture.componentInstance; // CrisisListComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    const TEST_TITLE = 'Test Title';
    comp.title = TEST_TITLE;
    fixture.detectChanges();
    expect(el.textContent).toContain(TEST_TITLE);
  });

});
