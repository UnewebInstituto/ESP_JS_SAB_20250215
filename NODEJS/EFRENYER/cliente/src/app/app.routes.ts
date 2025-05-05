import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegistroUsuarioComponent} from './registro-usuario.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: 'usuario', component:RegistroUsuarioComponent},
  {path: '**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
