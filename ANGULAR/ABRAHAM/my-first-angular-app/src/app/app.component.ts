import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';

@Component({
  selector: 'app-root',
  imports: [UserProfile ],
  // templateUrl: './app.component.html',
  template:`
  <h1>Clase 1 Curso de Angular</h1>
  <hr>
  <p>Ejemplos desarrollados por: {{autor}}, hoy es la clase número {{6+1}}</p>
  
  <p>  
  @if (logged){
  Fue verificado que usted ingreso al sistema
  }
  @else{
  No ha sido verificado que usted ingreso al sistema
  }
  </p>

  <hr>
  <h2>Sistemas Operativos</h2>
  
  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
  @for(os of operatingSystem; track os.id){
  <tr>
    <td>{{os.id}}</td>
    <td>{{os.name}}</td>
  </tr>
  }
  </table>
  <hr>
  <h2>estudiantes</h2>
  <table>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Correo</th>
    </tr>
    @for(estudiante of estudiantes; track estudiante.correo){
      <tr>
        <td>{{estudiante.nombre}}</td>
        <td>{{estudiante.apellido}}</td>
        <td>{{estudiante.correo}}</td>
      </tr>
    }
  </table>
  <hr>

<user-profile></user-profile>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  autor= "Abraham Balda";
  logged=false;

  operatingSystem=[
  {
    id:"win",
    name:"windows"
  },
  {
    id:"osx",
    name:"MacOSx"
  },
  {
    id:"linux",
    name:"linux"
  }
  ]

  estudiantes=[
    {
  nombre:"Abraham",
  apellido:"Balda",
  correo:"abrahambalda@gmail.com"  
  },
  {
    nombre:"Pedro",
    apellido:"Balda",
    correo:"pmbalda@gmail.com"  
    },
    {
      nombre:"Dayan",
      apellido:"Salas",
      correo:"dayansalas71@gmail.com"  
      }
];
}
