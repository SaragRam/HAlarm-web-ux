/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEditComponent } from './evento-edit.component';

describe('EventoCreateComponent', () => {
  let component: EventoEditComponent;
  let fixture: ComponentFixture<EventoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventoEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
