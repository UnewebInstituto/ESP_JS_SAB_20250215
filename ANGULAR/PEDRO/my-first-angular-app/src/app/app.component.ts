import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile],
  //templateUrl: './app.component.html',
  template: `
  <h1>CLASE 1 Curso de Angular</h1>
  <p>Ejemplos desarrollados por {{autor}}, hoy es la clase numero: {{ 6 + 1 }}</p>
  <br/>
  <p>
  @if (isLoggedIn){
    <b>Fue verificado que usted ingresó al sistema</b>
  } @else {
    <u>Su ingreso, no fue verificado</u>
  }
  </p>
  <hr/>
  <h2>Sistemas Operativos</h2>
  
  <table>
    <th>Identificacion</th>
    <th>Nombre</th>

  @for(temporal of operatingsystem; track temporal.id){
    <tr>
      <td>{{ temporal.id }}</td>
      <td>{{ temporal.name }}</td>
    </tr>
  }
</table>

<hr/>
  <h2>Estudiantes del curso de Angular</h2>
  <table>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Correo</th>
    </tr>

    @for(alumno of estudiantes; track alumno.nombre){
    <tr>
      <td>{{ alumno.nombre }}</td>
      <td>{{ alumno.apellido }}</td>
      <td>{{ alumno.correo }}</td>
    </tr>
  }
  </table>
  
  <user-profile/>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  autor = 'Pedro Balda';
  
  isLoggedIn = false;
  
  operatingsystem = [{id:'win', name: 'Windows'}, {id:'osx', name: 'MacOSx'}, {id:'linux', name: 'Linux'}]
  
  estudiantes = [{nombre:'Pedro', apellido: 'Balda', correo: 'pmbalda@gmail.com'}, {nombre:'Abraham', apellido: 'Balda', correo: 'abalda@gmail.com'}, {nombre:'Maria', apellido: 'Peña', correo: 'mpena@gmail.com'}, {nombre:'Jorge', apellido: 'Brito', correo: 'jbrito@gmail.com'}]
}
