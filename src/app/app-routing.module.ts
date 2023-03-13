import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/usuario-login.component';
import { EventosComponent } from './evento/eventos-list/eventos-list.component';
import { EventoCreateComponent } from './evento/evento-create/evento-create.component';
import { EventoEditComponent } from './evento/evento-edit/evento-edit.component';
import { EventosImportComponent } from './evento/eventos-import/eventos-import.component';

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
  {
    path: 'editar-evento',
    component: EventoEditComponent
  },
  {
    path: 'importar-eventos',
    component: EventosImportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
