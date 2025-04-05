import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';  
import { ChildComponent } from './child.component';
import { CommentsComponent } from './comments.component';
import { NgOptimizedImage } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [UserProfile,ChildComponent, CommentsComponent,NgOptimizedImage],
  //templateUrl: './app.component.html',
  template:`
  <div class='container'>
  <h1>Curso de angular</h1>
  <p>Ejemplo desarrollado por {{autor}}, hoy es la clase :{{ 7 + 1}}
  <br/>
  @if (isLoggedIn){
    <b>Fue verificado que usted ingreso al sistema</b>
  }@else{
    <u>No ha sido verificado que usted no ha ingresado al sistema</u>
    }
  </p>
  <hr/>
  <h2>Sistemas Operativos</h2>
  <table class='table table-bordered table-hover'>
    <thead>
      <tr>
        <th>Identificación</th>
        <th>Nombre</th>
      </tr>
    </thead> 
    <tbody>
  @for (temporal of operatingSystem; track temporal.id){
      <tr>
        <td>{{temporal.id}}</td>
        <td>{{temporal.name}}</td>
      </tr>
  }
    </tbody>
  </table>
  <hr/>
  <h2>Cursantes</h2>
  <table class='table table-bordered table-hover'>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>apellido</th>
        <th>correo</th>
      </tr>
    </thead>
    <tbody>
    @for (cursantes of estudiantes; track cursantes.name){
    <tr>
      <td>{{cursantes.name}}</td>
      <td>{{cursantes.apellido}}</td>
      <td>{{cursantes.correo}}</td>
    </tr>
  }
    </tbody>
  </table>
  <hr/>

  <user-profile ocupacion="Desarrollador Angular"/>

  <hr/>
    <h2>Vinculación de propiedades</h2>
    <img alt="foto" [src]="imagenURL">

    <h3>Textarea declarado como NO Editable</h3>
    <div class="form-group">
      <textarea class="form-control" rows="5" [disabled]="!isEditable"></textarea>
    </div>
    <hr/>
    <h2>Manejo de Eventos</h2>
      <div class='alert alert-secondary'>
          <strong>Este es el mensaje resultado del evento seleccionado: {{mensaje}}</strong>
      </div>
    <p (mouseover)="moverMouse()">
      <strong>Por favor mueva el mouse sobre el siguiente párrafo: </strong>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit ratione tenetur amet aspernatur, ab debitis. Quibusdam minus, minima facere possimus nulla laborum distinctio architecto! Dignissimos tempore sed vero provident!
    </p>
    <button class='btn btn-primary' (click)="saludo()">SALUDO!</button>

  <h2>Comunicacion de componentes con Output</h2>
  <child-component (addItemEvent)="addItem($event)"/>
  <p>Contador de elementos en la lista {{items.length}}</p>
  <p>Contenido de la posición {{items.length}}, {{items[items.length-1]}}</p><br/>
  
  <hr/>
  <h2>Vistas Aplazadas</h2>
  <div>
    <h3>Que opinas de angular?</h3>
    <article>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum, modi sint sapiente a laboriosam expedita excepturi ab tempora temporibus sit nobis, reprehenderit sed quae, debitis rerum dignissimos sequi hic.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum, modi sint sapiente a laboriosam expedita excepturi ab tempora temporibus sit nobis, reprehenderit sed quae, debitis rerum dignissimos sequi hic.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum, modi sint sapiente a laboriosam expedita excepturi ab tempora temporibus sit nobis, reprehenderit sed quae, debitis rerum dignissimos sequi hic.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum, modi sint sapiente a laboriosam expedita excepturi ab tempora temporibus sit nobis, reprehenderit sed quae, debitis rerum dignissimos sequi hic.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum, modi sint sapiente a laboriosam expedita excepturi ab tempora temporibus sit nobis, reprehenderit sed quae, debitis rerum dignissimos sequi hic.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum, modi sint sapiente a laboriosam expedita excepturi ab tempora temporibus sit nobis, reprehenderit sed quae, debitis rerum dignissimos sequi hic.</p>
    </article>
    @defer (on viewport){
      <comments/>
    }@placeholder{
      <p>Futuros comentarios</p>
    }@loading (minimum 3s){
      <p>Cargando comentarios...</p>
    }

    <hr/>
    <h2>Optimización de Imagenes</h2>
          <ul>
        <li>
          Imagen Estaticas
          <img ngSrc="img/2.jfif" alt= "Imagen paisaje 2" height="80" width="80">
        </li>
        <li>
          Imagen Dinamica
          <img [ngSrc]="imgUrl" [alt]="imgAlt" height="80" width="80">
        </li>
      </ul>
  </div>
 


  </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //--------atributos
  title = 'my-first-angular-app'
  autor = 'Maria Peña';
  isLoggedIn = true;
  operatingSystem = [{id:'win' , name:'Windows'},{id:'osx', name:'MacOsx'},{id:'linux', name:'Linux'}]

  estudiantes = [{name:'Maria',apellido:'Peña',correo:'mariapenarojas279@gmail.com'} ]
//---------vinculacion de propiedades
  isEditable = true;
  imagenURL = 'img/1.jfif';
  mensaje = '';
    
  // Comunicacio de componentes con @Output
  items = new Array();

// -------Métodos
// -------Manejo de eventos
saludo(){
  this.mensaje = 'Hola, saludo generado como respuesta al evento click!';
  console.log(this.mensaje);
}
moverMouse(){
  this.mensaje = 'Usted a movido el mouse sobre el parrafo';
  console.log(this.mensaje);
}
  // Comunicacio de componentes con @Output
addItem(item:string){
  this.items.push(item);
  console.log(item);
}
  // Optimización de imagenes
  imgUrl = "img/3.jfif";
  imgAlt = "Imagen paisaje 2"
}
