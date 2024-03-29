import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderModule } from './app-header/app-header.module';
import { EventoModule } from './evento/evento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeaderModule,
    EventoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
