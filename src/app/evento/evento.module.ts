import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderModule } from '../app-header/app-header.module';
import { EventosComponent } from './eventos-list/eventos-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';
import { EventosImportComponent } from './eventos-import/eventos-import.component';



@NgModule({
  declarations: [EventosComponent, EventoCreateComponent, EventoEditComponent, EventosImportComponent],
  imports: [
    CommonModule, ReactiveFormsModule, AppHeaderModule, FormsModule
  ],
  exports: [EventosComponent, EventoCreateComponent, EventoEditComponent, EventosImportComponent]
})
export class EventoModule { }
