import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderModule } from '../app-header/app-header.module';
import { EventosComponent } from './eventos-list/eventos-list.component';



@NgModule({
  declarations: [EventosComponent],
  imports: [
    CommonModule, ReactiveFormsModule, AppHeaderModule, FormsModule
  ],
  exports: [EventosComponent]
})
export class EventoModule { }
