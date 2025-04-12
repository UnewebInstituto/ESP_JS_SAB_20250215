import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserProfile } from './userprofile.component';
import { ChildComponent } from './child.component';
import { CommentsComponent } from "./comments.components";
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
//import * as $ from 'jquery';
declare var $: any;

//creando servicios Inyectables
import { CarService } from './car.service';

//Tuberias (Pipe)
import { UpperCasePipe, LowerCasePipe, DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';

//  templateUrl: './app.component.html',

@Component({
  selector: 'app-root',
  imports: [UserProfile, ChildComponent, CommentsComponent, NgOptimizedImage, RouterOutlet, RouterLink, ReactiveFormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
  template: `
  
  <div class="container">
  <nav>
    <!--
    Notacion antes de usar RouterLink
    <a routerLink="/">Inicio</a>
    |
    <a routerLink="/user">Usuario</a>
    -->
    <a routerLink="/">Inicio</a>
    |
    <a routerLink="/user">Usuario</a>
  </nav>
  <router-outlet/>
  <hr/>
  
  <h2>Formas reactivas en Angular</h2>
  <form [formGroup]="profileForm"  (ngSubmit)="handleSubmit()">
  <div class="mb-3 mt-3">
    <label for="name" class="form-label">Nombre:</label>
    <!--<input type="text" class="form-control" id="name" placeholder="Ingrese nombre" name="name">-->
    <input type="text" class="form-control" id="name" placeholder="Ingrese nombre" formControlName="name">

  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Correo electronico:</label>
    <!--<input type="email" class="form-control" id="email" placeholder="Ingrese correo electronico" name="email">-->
    <input type="email" class="form-control" id="email" placeholder="Ingrese correo electronico" formControlName="email">
  </div>
  <div id="datos" >
    <h2>Datos del formulario con perfil del usuario</h2>
    <p>Nombre: {{profileForm.value.name}}</p>
    <p>Correp Electronico: {{profileForm.value.email}}</p>
  </div>
  <button type="submit" (click)="mostrar()" class="btn btn-warning" name="btnEnviar" 
    [disabled]="!profileForm.valid">Mostra</button>
  </form>
  <hr/>
    <h2>Creando un servicio Inyectable</h2>
    <div>
      <label for="">Todos los Vehiculos </label>
      <!--
      se coloca en comentario dado que se accede al servicio via constructor y no inyeccion
      <p>{{ carService.getCars() }}</p>
      -->
    </div>
    <div>
      <label for="">Vehiculo numero 4</label>
      <!--<p>{{carService.getCar(3)}}</p>-->
      <br/>
      <p>{{display}}</p>
    </div>
  <hr/>
  <div>
    <h2>Uso de Tuberias (Pipe)</h2>
    {{ loudMessage | uppercase }}
    <br>
    {{userName | lowercase}}
    <br>
    Numero: {{numero | number:"3.2-2"}}
    <br>
    Fecha de Nacimiento: {{fechaNacimiento | date:'medium'}}
    <br>
    Costo: {{costo | currency }}

  </div>

  <hr/>
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
    <div>
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
  ctrlMostrar = true;
  //inyeccion
  display = '';
  //Uso de tuberias
  loudMessage = 'Nosotros pensamos que hacemos algo grande!!';
  userName = 'JORGE BRITO';
  numero = 12345.6789;
  fechaNacimiento = new Date(2002, 12, 18);
  costo = 21000.25;
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
  // Declaracion para formas reactivas en Angular
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[ Validators.required, Validators.email])
  });

  //Creando Servicios Inyectables
  
  /*
    Se coloca en comentario, dado que se ha pasado el servicio como atributo del constructor 
  */
  //carService = inject(CarService);

    // COmunicacion de componentes con @Output
  addItem(item:string){
    this.items.push(item);
    console.log(this.items);
  }
  // Optimizacion de Imagenes
  imgUrl = "img/3.jfif";
  imgAlt = "Imagen paisaje numero 3";

  //Formas Reactivas
  handleSubmit(){
    alert( this.profileForm.value.name + " | " + this.profileForm.value.email);
  }

  mostrar(){
    if(this.ctrlMostrar){
    $("#datos").show(3000);
    $("#btnEnviar").html("Ocultar")
    this.ctrlMostrar = false;
  }else{
    $("#datos").hide(3000);
    $("#btnEnviar").html("Mostrar")
    this.ctrlMostrar = true;
  }
}
/*
  Un metodo constructor es el primer metodo que 
  se va a ejecutar en la clase. Puede actuar como un inicializador de la misma.

  **constructor(){
  this.display = this.carService.getCars().join(' ⭐️ ')
}
 */
constructor(private carService:CarService){
  this.display = this.carService.getCars().join(' ⭐️ ')
}
}
