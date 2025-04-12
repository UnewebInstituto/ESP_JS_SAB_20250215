import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
export const routes: Routes = [
  {
    path: '',
    title: 'Página de inicio de la aplicación',
    component: HomeComponent
  },
  {
    path: 'user',
    title: 'Página Usuario de la aplicación',
    component: UserComponent
  }
];
