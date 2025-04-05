import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';
import { ChildComponent } from './child.component';
import { CommentsComponent } from "./comments.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UserProfile, ChildComponent, CommentsComponent, NgOptimizedImage],
  //templateUrl: './app.component.html',
  template: `
  <div class="container">
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
  
  <table class='table table-bordered'>
    <thead>
      <th>Identificacion</th>
      <th>Nombre</th>
    </thead>
    <tbody>
  @for(temporal of operatingsystem; track temporal.id){
    <tr>
      <td>{{ temporal.id }}</td>
      <td>{{ temporal.name }}</td>
    </tr>
  }
</tbody>
</table>

<hr/>
  <h2>Estudiantes del curso de Angular</h2>
  <table class='table table-bordered table-hover table-striped table-dark'>
  <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo</th>
      </tr>
  </thead>
  <tbody>   
    @for(alumno of estudiantes; track alumno.nombre){
    <tr>
      <tr>
      <td>{{ alumno.nombre }}</td>
      <td>{{ alumno.apellido }}</td>
      <td>{{ alumno.correo }}</td>
    </tr>
    
  }
  </tbody>
  </table>
  <user-profile ocupacion="Desarrollador Angular" nombre="Pedro Balda"/>

  <hr/>
  <h2>Vinculación de Propiedades</h2>
  <img alt="photo" [src]="imageURL">
  
  <hr/>
  <h3>Text area no editable</h3>
    <div class="form group" >
      <textarea class="form-control" rows="5" [disabled]="!isEditable"></textarea>
    </div>

  <hr/>
  <h2>Manejo de Eventos</h2>
  <div class="alert alert-secondary">
    <strong> Este es el mensaje resultado del evento seleccionado:</strong> {{ mensaje }}
  </div>
    <strong>Por favor mueva el mouse sobre le siguiente parrafo</strong>
    <p (mouseover)="mouseOver()">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cupiditate repudiandae. Quae cum deleniti adipisci velit fugiat sequi unde consequatur quisquam nulla! Qui, culpa deleniti eaque labore fugiat dolor numquam!
    </p>
  
  <button class="btn btn-primary" (click)="saludo()">Saludo</button>

  <h2>Comunicación de componentes con Output</h2>

  <child-component (addItemEvent)="addItem($event)" />
  <p>Contador de elementos en la lista {{items.length}}, {{items[items.length-1]}}</p>
  
  <hr/>
  <h2>Vistas aplasables</h2>
  <div>
    <h3>Que opinas acerca de Angular</h3>
    <article>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam distinctio explicabo facilis necessitatibus officiis placeat assumenda, iusto aut provident repellendus, cupiditate, dolor blanditiis! Cumque voluptatibus dolorum totam expedita sapiente?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum voluptate architecto, culpa esse dolorum dolore repudiandae laudantium voluptates ullam. Magnam quia deserunt sunt iusto nobis obcaecati nostrum dicta eveniet!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestias sit. Porro, atque officia corporis quae sapiente consequatur aut maiores non. Dignissimos est, quasi dolor reprehenderit impedit officia suscipit ut!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatum nostrum repellendus aliquid quia voluptates recusandae natus rem temporibus, itaque quis maiores est ipsa, aut nulla. Quas ea modi fugiat?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos, consectetur nostrum tenetur amet enim harum? Accusantium officia illum quidem a error alias modi cumque. Quas eaque nesciunt vel impedit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa cumque quas molestias magni labore minima sapiente suscipit tempora maxime hic error doloremque deserunt adipisci minus autem, aliquam consectetur doloribus.</p>
    </article>
    @defer(on viewport) {
      <comments/>
    }@placeholder () {
      <p>Futuros comentarios</p>
    }@loading (minimum 3s){
      <p>Cargando comentarios</p>
    }
    
  </div>

  <hr/>
  <h2>Otimización de Imagenes</h2>
  <ul>
    <li>
      Imagen Estática
      <img ngSrc="img/2.jfif" alt="Imagen paisaje número 2" width="32px" height="32px">
    </li>
    <li>
      Imagen Dinámica
      <img [ngSrc]="Imgurl" [alt]="Imgalt" width="32px" height="32px">
    </li>
  </ul>

  </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Atributos
  autor = 'Pedro Balda';
    isLoggedIn = false;
  
  operatingsystem = [{id:'win', name: 'Windows'}, {id:'osx', name: 'MacOSx'}, {id:'linux', name: 'Linux'}]
  
  estudiantes = [{nombre:'Pedro', apellido: 'Balda', correo: 'pmbalda@gmail.com'}, {nombre:'Abraham', apellido: 'Balda', correo: 'abalda@gmail.com'}, {nombre:'Maria', apellido: 'Peña', correo: 'mpena@gmail.com'}, {nombre:'Jorge', apellido: 'Brito', correo: 'jbrito@gmail.com'}];
  //Vinculación de propiedades
  isEditable = true;
  imageURL = "img/1.jfif";
  mensaje = '';

  //Comunicación de componentes con Output
  items = new Array();
  items1 = new Array();

  //Métodos
  //Manejo de eventos
  saludo(){
    
    this.mensaje = 'Hola, saludo generado como respuesta al evento click';
    console.log(this.mensaje);
  }

  mouseOver() {
    this.mensaje = "Usted movio el mouse sobre el parrafo";
    console.log(this.mensaje);
  }

  //Comunicación de componentes con Output
  addItem(item: string){
    this.items.push(item);
    console.log(this.items);
  };

  //Optimización de Imagen
  Imgurl="Img/3.jfif";
  Imgalt="Imagen paisaje número 3";
}
