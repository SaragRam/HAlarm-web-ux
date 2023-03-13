import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderModule } from '../app-header/app-header.module';
import { EventosComponent } from './eventos-list/eventos-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';



@NgModule({
  declarations: [EventosComponent, EventoCreateComponent, EventoEditComponent],
  imports: [
    CommonModule, ReactiveFormsModule, AppHeaderModule, FormsModule
  ],
  exports: [EventosComponent, EventoCreateComponent, EventoEditComponent]
})
export class EventoModule { }
