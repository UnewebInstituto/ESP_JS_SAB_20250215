import { Component, inject, Injectable } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserProfile } from './userprofile.component';
import { ChildComponent } from './child.component';
import { CommentsComponent } from "./comments.component";
import { NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
declare var $: any;

//Creando Servicios Inyectados
import { CarService } from './car.service';

//Tuberias (Pipe)
import { UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UserProfile, ChildComponent, CommentsComponent, NgOptimizedImage, RouterOutlet, RouterLink, ReactiveFormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
  //templateUrl: './app.component.html',
  template: `
  <div class="container">
  <nav>
    <a routerLink="/">Inicio</a>
    |
    <a routerLink="/user">Usuario</a>
  </nav>
  <router-outlet />
  <hr/>

 <h2>Formas reactivas en Angular</h2>
  <form [formGroup]="profileform" (ngSubmit)="handleSubmit()">
    <div class="mb-3 mt-3">
      <label for="name" class="form-label">Nombre:</label>
      <!--<input type="text" class="form-control" id="name" placeholder="Ingrese nombre" name="name">-->
      <input type="text" class="form-control" id="name" placeholder="Ingrese nombre" formControlName="name">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Correo Electrónico:</label>
      <!--<input type="email" class="form-control" id="email" placeholder="Ingrese correo electrónico" name="email">-->
      <input type="email" class="form-control" id="email" placeholder="Ingrese correo electrónico" formControlName="email">
    </div>
    
    <div id="datos">
      <h2>Datos del formulario con perfil del usuario</h2>
      <p>Nombre: {{profileform.value.name}}</p>
      <p>Correo Electrónico: {{profileform.value.email}}</p>

    </div>
    <button id="btnenviar" type="submit" (click)="mostrar()" class="btn btn-warning" [disabled]="!profileform.valid">Mostrar</button>
  </form>
  <hr/>

  <h2>Creando un Servicio Inyectable</h2>
  <!-- Se coloca en comentario dado que se accede al servicio via constructor y no inyeccion
  <div>
    <label for="">Todos los Vehículos</label>
    <p>{{ carService.getCars() }}</p>
  </div>
  <div>
    <label for="">Vehículo 4</label>
    <p>{{ carService.getCar(3) }}</p>
  </div>
-->
  <div>
    <label for="">Vehículos</label>
    <p>{{ this.display }}</p>
  </div>
  <hr/>
  <div>
    <h2>Uso de tuberias (Pipe)</h2>
    {{loudMessage | uppercase}}
    <br>
    {{username | lowercase}}
    <br>
    {{numero | number:"3.2-2"}}
    <br>
    {{fechanacimiento | date: 'medium'}}
    <br>
    {{costo | currency}}
    <br>

  </div>

  <hr/>
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
      <img ngSrc="img/2.jfif" alt="Imagen paisaje número 2" width="32" height="32">
    </li>
    <li>
      Imagen Dinámica
      <img [ngSrc]="Imgurl" [alt]="Imgalt" width="32" height="32">
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
  ctrlMostrar = true;
  display = '';

  //Uso de tuberias
  loudMessage = 'nosotros pensamos que hacemos algo grande';
  username = 'PEDRO BALDA';
  numero = 12345.6789;
  fechanacimiento = new Date(1978,11,9);
  costo = 21000.25

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

  //Declaracion para formas reactivas en Angular
  profileform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  //Creando servicios inyectados

  //Se coloca en comentario dado que se ha pasdo el servicio como atributo del constructor de la clase
  //carService = inject(CarService);


  //Optimización de Imagen
  Imgurl="img/3.jfif";
  Imgalt="Imagen paisaje número 3";

  //Formas reactivas 
  handleSubmit(){
    alert(this.profileform.value.name + "|" + this.profileform.value.email);
  }

  mostrar(){
    if (this.ctrlMostrar){
      $("#datos").show(3000);
      this.ctrlMostrar = false;
      $("#btnenviar").html("Ocultar");
    } else {
      $("#datos").hide(3000);
      $("#btnenviar").html("Mostrar");
      this.ctrlMostrar = true;
    }
    
  }
  //Constructor por Inyeccion
  /*constructor(){
    this.display = this.carService.getCars().join (' ⭐ ');
  }*/

    //Constructor por Atributos
    constructor(private carService:CarService){
      this.display = this.carService.getCars().join (' ⭐ ');
    }
}
