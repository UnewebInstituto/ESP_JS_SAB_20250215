import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';
import { ChildComponent } from "./child.component";
import { CommentsComponent } from "./comments.component";
import { NgOptimizedImage } from '@angular/common';

//   templateUrl: './app.component.html',
@Component({
  selector: 'app-root',
  imports: [UserProfile, ChildComponent, CommentsComponent, NgOptimizedImage],
  template: `
  <div class='container'>
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
  <table class='table table-bordered'>
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
      <tr>
  }
    </tbody>
  </table>
  <hr/>
  <h2>Estudiantes del curso de Angular</h2>
  <table class='table table-striped table-hover'>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo Electrónico</th>
      </tr>
    </thead>
    <tbody>
    @for (alumnos of estudiantes; track alumnos.correo){
    <tr>
      <td>{{alumnos.nombre}}</td>
      <td>{{alumnos.apellido}}</td>
      <td>{{alumnos.correo}}</td>
    </tr>
    }
    </tbody>
  </table>
  <hr/>

  <user-profile ocupacion="Desarrollador Angular" nombre="HENRY DUQUE"/>
  
  <hr/>
  <h2>Vinculación de propiedades</h2>
  <img alt="foto" [src]="imageURL">
  <br/>
  <h3>Textarea declarado como no editable</h3>
  <div class="form-group">
    <textarea class="form-control" rows="5" [disabled]="!isEditable"></textarea>
  </div>
  <hr/>
  <h2>Manejo de eventos</h2>
  <div class='alert alert-secondary'>
    <strong>Este es el mensaje resultado del evento seleccionado:</strong> {{mensaje}}
  </div>
  <p (mouseover)="moverMouse()">
    <strong>Por favor mueva el mouse sobre el siguiente párrafo: </strong>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit ratione tenetur amet aspernatur, ab debitis. Quibusdam minus, minima facere possimus nulla laborum distinctio architecto! Dignissimos tempore sed vero provident!
  </p>
  <button class='btn btn-primary' (click)="saludo()">SALUDO</button>

  <h2>Comunicación de componentes con Output</h2>
  <child-component (addItemEvent)="addItem($event)"/>
  <p>Contenido de la posición {{items.length}}, {{items[items.length-1]}}</p>

  <hr/>
  <h2>Vistas aplazables</h2>
  <div>
    <h3>¿Qué opina acerca de Angular?</h3>
    <article>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nostrum nesciunt optio qui in, dicta inventore veniam similique assumenda laboriosam laudantium ratione facere dignissimos maiores, impedit aut tempora deleniti illum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates animi officia quaerat nisi, atque non qui excepturi unde beatae doloribus praesentium voluptatum illo enim adipisci consectetur est aliquid deleniti.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quisquam reprehenderit nulla quae recusandae ab laboriosam quo adipisci vel incidunt totam iusto cumque eveniet, veniam excepturi? Suscipit laudantium accusamus veritatis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum veritatis autem id voluptates minima accusamus, dolore, ab eos et saepe doloremque quas ducimus iusto perferendis. Nobis tempora neque voluptate?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae veniam rem, vitae quos consequuntur! Sit dicta voluptas possimus atque consequuntur. Voluptate illo fugiat aspernatur numquam iste atque! Officiis, cumque.</p>
    </article>
    @defer (on viewport){
      <comments/>
    }@placeholder {
      <p>Futuros comentarios</p>
    }@loading (minimum 3s) {
      <p>Cargando comentarios...</p>
    }
    <hr/>
    <h2>Optimización de Imagenes</h2>
      <ul>
        <li>
          Imagen Estáticas
          <img ngSrc="img/2.jfif" alt="Imagen paisaje número 2" width="100" height="80">
        </li>
        <li>
          Imagen Dinámica
          <img [ngSrc]="imgUrl" [alt]="imgAlt" width="100" height="80" >
        </li>
      </ul>
  </div>

  </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Atributos
  autor = 'HENRY DUQUE';
  isLoggedIn = false;
  operatingSystem = [{id: 'win', name:'Windows'},{id: 'osx', name:'MacOSx'},{id: 'linux', name:'Linux'}];
  estudiantes = [{nombre:'María',apellido:'Peña',correo:'mariapenarojas@gmail.com'},{nombre:'Pedro',apellido:'Balda',correo:'pbalda@gmail.com'},{nombre:'Jorge',apellido:'Brito',correo:'jbrito@gmail.com'},{nombre:'Abraham',apellido:'Balda',correo:'abalda@gmail.com'}];
  // Vinculación de propiedades
  isEditable = true;
  imageURL = 'img/1.jfif';
  mensaje = '';

  // Comunicación de componentes con @Output
  items = new Array();
  items1 = new Array();

  // Métodos
  // Manejo de eventos
  saludo(){
    this.mensaje = 'Hola, saludo generado como respuesta al evento click 👋';
    console.log(this.mensaje);
  }
  moverMouse(){
    this.mensaje = 'Usted, movio el mouse sobre el párrafo 🚀';
    console.log(this.mensaje);
  }

  // Comunicación de componentes con @Output
  addItem(item: string){
    this.items.push(item);
    console.log(this.items);

  }

  // Optimización de imagenes
  imgUrl = "img/3.jfif";
  imgAlt = "Imagen paisaje número 3";
}
