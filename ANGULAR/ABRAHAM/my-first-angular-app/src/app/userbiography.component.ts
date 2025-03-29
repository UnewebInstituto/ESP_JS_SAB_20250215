import {Component} from '@angular/core';
import { UserAddress } from './useraddres.component';

// user-profile.ts
@Component({
  selector: 'user-biography',
  imports:[UserAddress],
  template: `<h2>Componente user biography</h2>
  <user-address/>
  `,
  styles:``,
})
export class UserBiography {
  
}