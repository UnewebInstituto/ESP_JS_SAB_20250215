import {Component, Input} from '@angular/core';
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
  <hr>
  <h2>Comunicación de componentes con input</h2>
  <b>Ocupacion del usuario:</b><u>{{ocupacion}}</u>
  <br>
  <b>Nombre de Usuario:</b><u>{{nombre}}</u> 
  `,
  styleUrl:`userprofile.component.css`,
})
export class UserProfile {
  @Input() ocupacion=""; 
  @Input() nombre=""; 
}