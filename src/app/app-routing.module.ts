import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/usuario-login.component';
import { EventosComponent } from './evento/eventos-list/eventos-list.component';
import { EventoCreateComponent } from './evento/evento-create/evento-create.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'crear-evento',
    component: EventoCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
