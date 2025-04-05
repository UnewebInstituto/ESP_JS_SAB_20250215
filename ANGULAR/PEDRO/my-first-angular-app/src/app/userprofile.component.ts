import { Component, Input } from '@angular/core';
import { UserBiography } from './userbiography.component';
import { ProfilePhoto } from './profilephoto.component';

// user-profile.ts
@Component({
  selector: 'user-profile',
  imports: [UserBiography, ProfilePhoto],
  template: `<h1>Component para user profile</h1>
  <table>
    <tr>
      <td><user-biography/></td>
      <td><profilephoto/></td>
    </tr>
  </table>
  <hr/>
  <h2>Comunicación de componentes con Input</h2>
  <b>Ocupación del usuario:</b><u>{{ocupacion}}</u>, <b>Nombre del usuario: </b><u>{{nombre}}</u>
  `,
  styleUrl: 'userprofile.component.css',
})
export class UserProfile { 
  @Input() ocupacion = '';
  @Input() nombre = '';
 }