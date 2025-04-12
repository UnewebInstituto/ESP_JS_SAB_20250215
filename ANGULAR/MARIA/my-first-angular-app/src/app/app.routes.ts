import { Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [
  {
    path:'home',
    title:'Pagina de inicio de la aplicacion',
    component: HomeComponent,
  },
  {
    path:'user',
    title:'Pagina Usuario de la aplicacion',
    component: UserComponent,
  },
];
