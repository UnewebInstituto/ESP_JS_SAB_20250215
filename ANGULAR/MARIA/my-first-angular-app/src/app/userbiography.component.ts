import { Component } from '@angular/core';
import { UserAddress } from './useraddress.component';

// user-biografy.ts
@Component({
  selector: 'user-biography.',
  imports:[UserAddress],
  template: `<h2>Componente USER-Biography</h2>
  <user-address/>`,

})
export class UserBiography { /* Your component code goes here */ }