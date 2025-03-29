import { Component } from '@angular/core';
import { UserBiography } from './userBiography.component';
import { ProfilePhoto } from './profilephoto.component';
// user-profile.ts
@Component({
    selector: 'user-profile',
    imports: [UserBiography, ProfilePhoto],
    template: `<h1>Componente HTML para UserProfile</h1>
    <table>
      <td><user-biography/></td>
      <td><profile-photo/></td>
    </table>`,
    
    styleUrl: 'userprofile.component.css',
  })
  export class UserProfile { /* Your component code goes here */ }