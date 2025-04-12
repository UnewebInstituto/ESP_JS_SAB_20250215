import { Component, Inject, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserProfile } from './userprofile.component';
import { ChildComponent } from "./child.component";
import { CommentsComponent } from "./comments.component";
import { NgOptimizedImage } from '@angular/common';
//import * as $ from 'jquery';
declare var $: any;

// Creando Servicios Inyectables
import { CarService } from './car.service';

// Tuberías (Pipe)
import { UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';


//   templateUrl: './app.component.html',
@Component({
  selector: 'app-root',
  imports: [UserProfile, ChildComponent, CommentsComponent, NgOptimizedImage, RouterOutlet, RouterLink, ReactiveFormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
  template: `
  <div class='container'>
    <nav>
      <!--
      Notación antes de usar RouterLink
      <a href="/">Inicio</a>
      |
      <a href="/user">Usuario</a>
      -->
      <!-- Notación de RouterLink -->
      <a routerLink="/">Inicio</a>
      |
      <a routerLink="/user">Usuario</a>
    </nav>
    <router-outlet />
    <hr/>
    <!--https://www.w3schools.com/bootstrap5/bootstrap_forms.php -->
    <h2>Formas reactivas en Angular</h2>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
        <div class="mb-3 mt-3">
          <label for="name" class="form-label">Nombre:</label>
          <!--
          <input type="text" class="form-control" id="name" placeholder="Ingrese nombre" name="name">
          -->
          <input type="text" class="form-control" id="name" placeholder="Ingrese nombre" formControlName="name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico:</label>
          <!--
          <input type="email" class="form-control" id="email" placeholder="Ingrese correo electrónico" name="email">
          -->
          <input type="email" class="form-control" id="email" placeholder="Ingrese correo electrónico" formControlName="email">
        </div>
        <div id="datos">
          <h2>Datos del formulario con perfil del usuario</h2>
          <p>Nombre: {{ profileForm.value.name }}</p>
          <p>Correo Electrónico: {{ profileForm.value.email }}</p>
        </div>
        <button id="btnEnviar" type="submit" (click)="mostrar()" class="btn btn-warning" [disabled]="!profileForm.valid">Mostrar</button>
    </form>
    <hr/>
    <h2>Creando un Servicio Inyectable</h2>
      <div>
        <label for="">Todos los vehículos</label>
        <!--
        Se coloca en comentario dado que se accede al servicio vía 
        constructor y no inyección.
        <p>{{ carService.getCars() }}</p>
        -->
        <br/>
        <p>{{ display }} </p>
      </div>
      <!--
      <div> 
        <label for="">Vehículo número 4</label>
        <p> {{carService.getCar(3)}}</p>
      </div>
      -->
    <hr/>
    <div>
      <h2>Uso de Tuberías (Pipe)</h2>
      {{ loudMessage | uppercase }}
      <br/>
      {{ userName | lowercase }}
      <br />
      Número: {{ numero | number:"3.2-2"}}
      <br />
      Fecha de Nacimiento: {{ fechaNacimiento | date: 'medium' }}
      <br />
      Costo: {{ costo | currency }}
    </div>
    
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
  ctrlMostrar = true;
  // Creando Servicios Inyectables
  display = '';

  // Uso de Tublerías (Pipe)
  loudMessage = 'nosotros pensamos que hacemos algo grande!';
  userName = 'HENRY DUQUE';

  numero = 12345.6789
  fechaNacimiento = new Date(1968, 11, 18);
  costo = 21000.25;


  // Declaración para formas reactivas en Angular
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Creando Servicios Inyectables
  /**
   * Se coloca en comentario, dado que se ha pasado el servicio
   * como atributo del constructor de la clase
   */
  //carService = inject(CarService);

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

  // Formas Reactivas
  handleSubmit(){
    alert(this.profileForm.value.name + " | " + this.profileForm.value.email);
  }

  // Uso de jQuery en Angular
  mostrar(){
    if (this.ctrlMostrar){
      $("#datos").show(3000); 
      $("#btnEnviar").html("Ocultar");
      this.ctrlMostrar = false;
    }else{
      $("#datos").hide(3000); 
      $("#btnEnviar").html("Mostrar");
      this.ctrlMostrar = true;
    }
  }

  /**
   * Un método constructor es el primer método que se
   * va a ejecutar en la clase. Puede actuar como un 
   * inicializador de la misma.
   */
  /*
  constructor(){
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
  */
  constructor(private carService:CarService){
    this.display = this.carService.getCars().join(' ⭐️ ');
  }

}
