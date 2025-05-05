import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

export const routes: Routes = [
  {path:'',redirectTo:""},
  {path:'usuario',component:RegistroUsuarioComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}