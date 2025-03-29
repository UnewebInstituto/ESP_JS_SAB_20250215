import { Component } from '@angular/core';
import { UserAddress } from './useraddress.component';

// user-biograpyh.ts
@Component({
  selector: 'user-biography',
  imports: [UserAddress],
  template: `<h2>Componente user-biography</h2>
  <user-address/>`,
})
export class UserBiography { /* Your component code goes here */ }