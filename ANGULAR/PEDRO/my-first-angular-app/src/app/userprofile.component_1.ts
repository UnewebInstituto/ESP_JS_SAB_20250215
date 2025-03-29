import { Component } from '@angular/core';
// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>Perfil del usuario Pedro</h1>
    <p>This is the user profile page</p>
  `,
  styles: `h1 { font-size: 3em; } `,
})
export class UserProfile { /* Your component code goes here */ }