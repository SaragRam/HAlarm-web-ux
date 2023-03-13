/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosImportComponent } from './eventos-import.component';

describe('EventosImportComponent', () => {
  let component: EventosImportComponent;
  let fixture: ComponentFixture<EventosImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventosImportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
