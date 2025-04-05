import { Component, Input } from '@angular/core';
import { UserBiography } from './userbiography.component';  
import { ProfilePhoto } from './profilephoto.component';

// user-profile.ts
@Component({
  selector: 'user-profile',
  imports:[UserBiography,ProfilePhoto],
  template: `<h1>Componente user profile</h1>
  <table>
    <tr>
      <td><user-biography/></td>
      <td><profile-photo/></td>
    </tr>
  </table>
  <hr/>
  <h2>Comunicacion de componentes</h2>
  <b>Ocupacion del Usuario:</b><u> {{ocupacion}} </u>
  <b>,Nombre del usuario:</b><u> {{nombre}} </u>
  
  `,
  styleUrl:'./userprofile.component.css'
})
export class UserProfile { /* Your component code goes here */ 
  @Input() ocupacion = '';
  @Input() nombre = 'MARIA PEÑA';
  
}

