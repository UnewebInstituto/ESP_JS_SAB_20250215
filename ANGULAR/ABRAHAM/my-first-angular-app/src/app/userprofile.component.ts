import {Component} from '@angular/core';
import { UserBiography  } from './userbiography.component';
import { ProfilePhoto } from './profilephoto.component';
// user-profile.ts
@Component({
  selector: 'user-profile',
  imports:[UserBiography, ProfilePhoto],
  template: `
  <h1>User Profile</h1>
  <table>
  <tr>
    <td><user-biography/></td>
    <td><profile-photo/></td>
  </tr>
  </table>
  
   
  `,
  styleUrl:`userprofile.component.css`,
})
export class UserProfile {
  
}