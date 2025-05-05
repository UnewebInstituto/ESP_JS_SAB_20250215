import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistroUsuarioComponent } from './registro-usuario.component';


export const routes: Routes = [

  {path: 'usuario', component:RegistroUsuarioComponent},
  {path:'**', redirectTo:'/'}

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
