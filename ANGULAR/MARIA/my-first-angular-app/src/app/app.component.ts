import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';  
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserProfile  ],
  //templateUrl: './app.component.html',
  template:`
  <h1>Curso de angular</h1>
  <p>Ejemplo desarrollado por {{autor}}, hoy es la clase :{{ 6 + 1}}
  <br/>
  @if (isLoggedIn){
    <b>Fue verificado que usted ingreso al sistema</b>
  }@else{
    <u>No ha sido verificado que usted no ha ingresado al sistema</u>
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
  <h2>Cursantes</h2>
  <table>
    <tr>
      <th>Nombre</th>
      <th>apellido</th>
      <th>correo</th>
    </tr>
    @for (cursantes of estudiantes; track cursantes.name){
    <tr>
    <td>{{cursantes.name}}</td>
    <td>{{cursantes.apellido}}</td>
    <td>{{cursantes.correo}}</td>
    </tr>
  </table>
  <hr/>
  <user-profile/>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app'
  autor = 'Maria Peña';
  isLoggedIn = true;
  operatingSystem = [{id:'win' , name:'Windows'},{id:'osx', name:'MacOsx'},{id:'linux', name:'Linux'}]

  estudiantes = [{name:'Maria',apellido:'Peña',correo:'mariapenarojas279@gmail.com'},
    {name:'Jorge', apellido:'Peña',correo:'mariapenarojas279@gmail.com'},
  ]
}
