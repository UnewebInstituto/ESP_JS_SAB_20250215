import { Component } from '@angular/core';

// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>Perfil de Usuario: María</h1>
    <p>This is the user profile page</p>
  `,
  styles: `h1 { font-size: 3em; color: blue;} `,
})
export class UserProfile { /* Your component code goes here */ }