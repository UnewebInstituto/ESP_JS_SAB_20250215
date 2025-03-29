import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';

//   templateUrl: './app.component.html',
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile],
  template: `
  <h1>CLASE 1 Curso de Angular</h1>
  <p>Ejemplos desarrollados por {{autor}}, hoy es la clase número: {{ 6 + 1 }} 
  <br/>
  @if (isLoggedIn) {
    <b>Fue verificado que usted ingresó al sistema.</b>  
  }@else{
    <u>No ha sido verificado que usted ingresó al sistema.</u>
  }
  </p>
  <hr/>
  <h2>Sistemas Operativos</h2>
  <table>
    <tr>
      <th>Identificación</th>
      <th>Nombre</th>
    </tr>
  @for (temporal of operatingSystem; track temporal.id){
    <tr>
      <td>{{temporal.id}}</td>
      <td>{{temporal.name}}</td>
    <tr>
  }
  </table>
  <hr/>
  <h2>Estudiantes del curso de Angular</h2>
  <table>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Correo Electrónico</th>
    </tr>
    @for (alumnos of estudiantes; track alumnos.correo){
    <tr>
      <td>{{alumnos.nombre}}</td>
      <td>{{alumnos.apellido}}</td>
      <td>{{alumnos.correo}}</td>
    </tr>
    }
  </table>
  <hr/>
  <user-profile/>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  autor = 'HENRY DUQUE';
  isLoggedIn = false;
  operatingSystem = [{id: 'win', name:'Windows'},{id: 'osx', name:'MacOSx'},{id: 'linux', name:'Linux'}];
  estudiantes = [{nombre:'María',apellido:'Peña',correo:'mariapenarojas@gmail.com'}];
}
