import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './userprofile.component';
import { ChildComponent } from './child.component';
import { CommentsComponent } from "./comments.components";
import { NgOptimizedImage } from '@angular/common';

//  templateUrl: './app.component.html',

@Component({
  selector: 'app-root',
  imports: [UserProfile, ChildComponent, CommentsComponent, NgOptimizedImage],
  template: `
  <div class="container">
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
  <table class="table table-bordered table-dark">
    <thead>
      <tr>
        <th>Identificacion</th>
        <th>Nombre</th>
      </tr>
    </thead>
    <tbody>
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
  </tbody>
</table>
<hr/>
<h2>Estudiantes del curso de Angular</h2>
<table class="table table-dark table-striped table-bordered table-hover">
  <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo Electronico</th>
        <th>id</th>
      </tr>
    </thead>
    <tbody>
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
  </tbody>
  </table>
  <user-profile ocupacion="Desarrollador Angular" nombre="Jorge Brito"/>
  <hr>
  <h2>Vinculacion de propiedades</h2>
  <img  alt="foto" [src]="imageURL">
  <br>
  <h3>Textarea declarado como no editable</h3>
  <div class="form-group">
    <textarea class="form-control" rows="5"  [disabled]="!isEditable" ></textarea>
  </div>
  <hr/>
  <h2>Manejo de eventos</h2>
  <div class="alert alert-secondary">
    <strong>Este es el mensaje resultado del evento seleccionado:</strong>
    {{mensaje}} 
  </div>
  <p (mouseover)="moverMouse()">
    <strong> Por favor mueve el mouse sobre el siguiente parrafo: </strong>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto maxime quos corporis a neque, culpa, totam non nobis ratione aliquam maiores nisi rerum. Incidunt molestiae corporis inventore earum explicabo est.
  </p>
  <button class="btn btn-primary" (click)="saludo()"> SALUDO</button>
    <h2> Comunicacionde componentes con Output</h2>
    <child-component (addItemEvent)="addItem($event)"/>
    <p>Contenido de la posicion {{items.length}}, {{items[items.length-1]}}</p>

    <hr>
    <h2>Vistas Aplazables</h2>
    <div>
      <h3>Que opina acerca de Angular?</h3>
      <article>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur autem, voluptate iusto consequatur, eos sed repellendus est alias libero aliquid ad magni unde delectus ipsam incidunt deleniti rem, porro in!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur autem, voluptate iusto consequatur, eos sed repellendus est alias libero aliquid ad magni unde delectus ipsam incidunt deleniti rem, porro in!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur autem, voluptate iusto consequatur, eos sed repellendus est alias libero aliquid ad magni unde delectus ipsam incidunt deleniti rem, porro in!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur autem, voluptate iusto consequatur, eos sed repellendus est alias libero aliquid ad magni unde delectus ipsam incidunt deleniti rem, porro in!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur autem, voluptate iusto consequatur, eos sed repellendus est alias libero aliquid ad magni unde delectus ipsam incidunt deleniti rem, porro in!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur autem, voluptate iusto consequatur, eos sed repellendus est alias libero aliquid ad magni unde delectus ipsam incidunt deleniti rem, porro in!</p>
      </article>
      @defer(on viewport){
        <comments />
      }@placeholder{
          <p>Futuros comentarios</p>
      } @loading(minimum 6s) {
        <p>Cargando comentarios...</p>
      }
      <hr/>

      <h2>Optimizacion de Imagenes</h2>
        <ul>
          <li>
            Imagen Estatica
            <img ngSrc="img/2.jfif" alt="Imagen paisaje número 2" width="100" height="80">
        </li>
          <li>
            Imagen Dinamica
            <img [ngSrc]="imgUrl" [alt]="imgAlt" width="100" height="80">
          </li>
        </ul>
    </div>
    
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Atributos
  autor = 'JORGE BRITO';
  isLoggedIn = false;
  operatingSystem = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOSx'}, {id: 'linux', name: 'Linux'}]
  estudiante = [{id: '1',nombre: 'Jorge', apellido: 'Brito', correo: 'jorgebrito@gmail.com'}, {id: '2', nombre: 'abraham', apellido: 'Gonzales', correo: 'abraham@gmail.com'}, {id: '3', nombre: 'Maria', apellido: 'Pena', correo: 'Mariapena@gmail.com'}]
  //Vinculacion de propiedades
  isEditable = true;
  imageURL = 'img/1.jfif';
  mensaje= "";
  // COmunicacion de componentes con @Output
  items = new Array();
  items1 = new Array();
  //Metodos
  //Manejo de eventos

  saludo(){
    this.mensaje = 'Hola, saludo generado como respuesta al evento click';
    console.log(this.mensaje);
  }
  moverMouse(){
    this.mensaje= "Usted, movio el mouse sobre el parrafo";
    console.log(this.mensaje);
  }

    // COmunicacion de componentes con @Output
  addItem(item:string){
    this.items.push(item);
    console.log(this.items);
  }
  // Optimizacion de Imagenes
  imgUrl = "img/3.jfif";
  imgAlt = "Imagen paisaje numero 3";
}
