import { Component } from '@angular/core';
// user-profile.ts
@Component({
    selector: 'user-profile',
    template: `
      <h1>Perfil del usuario: JORGE</h1>
      <p>Esta es la página de perfil del usuario.</p>
    `,
    styles:`h1 {font-size:3em; color: red;}`,
  })
  export class UserProfile { /* Your component code goes here */ }