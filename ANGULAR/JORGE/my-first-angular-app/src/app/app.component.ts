import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';

//  templateUrl: './app.component.html',

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile],
  template: `
  <h1>CLASE 1 Curso de Angular</h1>
  <p>Ejemplos desarrollado por {{autor}}, hoy es la clase numero: {{ 6 + 1 }} <br/>
  @if(isLoggedIn){
    <b> Fue verificado que usted ingreso en el sistema. </b>
  }@else{
    <u>No ha sido verficado que usted ingreso al sistema</u>
  }
  </p>
  <hr/>
  <h2>Sistemas Operativos</h2>
  <table>
    <tr>
      <th>Identificacion</th>
      <th>Nombre</th>
    </tr>
  @for(temporal of operatingSystem; track temporal.id){
    <tr>
      <td>
        {{temporal.id}}
      </td>
      <td>
      {{temporal.name}}
      </td>
    </tr>
  }
</table>
<h2>Estudiantes del curso de Angular</h2>
<hr/>
<table>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Correo Electronico</th>
      <th>id</th>
    </tr>
    @for(temporal of estudiante; track temporal.nombre){
    <tr>
      <td>
        {{temporal.nombre}}
      </td>
      <td>
      {{temporal.apellido}}
      </td>
      <td>
      {{temporal.correo}}
      </td>
      <td>
      {{temporal.id}}
      </td>
    </tr>
  }
  </table>
  <user-profile/>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  autor = 'JORGE BRITO';
  isLoggedIn = false;
  operatingSystem = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOSx'}, {id: 'linux', name: 'Linux'}]
  estudiante = [{id: '1',nombre: 'Jorge', apellido: 'Brito', correo: 'jorgebrito@gmail.com'}, {id: '2', nombre: 'abraham', apellido: 'Gonzales', correo: 'abraham@gmail.com'}, {id: '3', nombre: 'Maria', apellido: 'Pena', correo: 'Mariapena@gmail.com'}]
}
