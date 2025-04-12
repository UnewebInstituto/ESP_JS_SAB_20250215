import { Component, inject} from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { RouterOutlet,RouterLink } from '@angular/router';
import { UserProfile } from './userprofile.component';  
import { ChildComponent } from './child.component';
import { CommentsComponent } from './comments.component';
import { NgOptimizedImage,UpperCasePipe,LowerCasePipe,DecimalPipe,DatePipe,CurrencyPipe } from '@angular/common';
declare var $: any;
import { CarService } from './car.service'; //Creando servicios inyesctables


@Component({
  selector: 'app-root',
  imports: [UserProfile,ChildComponent, CommentsComponent,NgOptimizedImage,RouterOutlet,RouterLink,ReactiveFormsModule,UpperCasePipe,LowerCasePipe,DecimalPipe,DatePipe,CurrencyPipe],
  //templateUrl: './app.component.html',
  template:`
  <div class='container'>
    <nav>
      <!-- <a href="/home">Inicio</a>    Notacion normal 
      |
      <a href="/user">Usuario</a> -->

      <a routerLink="/home">Inicio</a>    
      |
      <a routerLink="/user">Usuario</a> 
    </nav>
  <router-outlet/>
  <hr/>
  <h2>Formas Reactivas en Angular</h2>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
    <div class="mb-3 mt-3">
      <label for="name" class="form-label">Name:</label>
      <input type="name" class="form-control" id="name" placeholder="Enter name" formControlName="name">
    </div>
    <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" formControlName="email">
    </div>
    <div id="datos">
        <h2>Datos ingresados</h2>
        <p>Nombre:{{profileForm.value.name}}</p>
        <p>Email: {{profileForm.value.email}}</p>
    </div>
    <button id="btnEnviar" type="submit" (click)="mostrar()" class="btn btn-warning" [disabled]="!profileForm.valid">Submit</button>
  </form>
  <hr/>
    <h2>Creando un Servicio Inyectable</h2>
    <div>
    <label for="">Todos los vehiculos</label>
    <!-- <p>{{ carService.getCars() }}</p> ----------- Se coloca en comentario dado que se accede al servicio vía  constructor y no inyección.-->
    <br/>
    <p>{{display}}</p>
    </div>
    <!-- <div>
      <label for="">Vehiculo N°4 </label>
      <p> {{carService.getCar(3)}}</p>
    </div> -->
  <hr/>
  <div>
    <h2>Uso de tuberias (Pipe)</h2>
    {{loudMessage | uppercase}}
    <br/>
    {{autor | lowercase}}
    <br>
    Numero: {{ numero | number:"3.2-2"}}
    <br>
    Fecha: {{fechaNac | date: 'medium'}} 
    <br>
    Decimales: {{costo | currency}}

  </div>
  <h1>Curso de Angular</h1>
  <p>Ejemplo desarrollado por {{autor}}, hoy es la clase :{{ 8 + 1}}
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
  ctrlMostrar = true;
  display= ''; //inyeccion

  loudMessage= 'nosotros somos grandes!'; //tuberias
  numero =123456789;
  fechaNac =new Date(2000, 8, 27);
  costo = 30.50;

  
  //Formulario declaracion para formas reactivas angular

  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

//CREando servicios inyectables
//carService = inject(CarService);




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

  //formas reactivas

  handleSubmit(){
    alert(this.profileForm.value.name + "|" + this.profileForm.value.email);
  }


// Uso de jQuery en angular
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
/*
  * Un método constructor es el primer método que se
  * va a ejecutar en la clase. Puede actuar como un 
  * inicializador de la misma.
*/

// constructor(){ //metodo contructor 
//     this.display = this.carService.getCars().join(' ⭐️ ');
// }


constructor(private carService:CarService){ //metodo contructor 
  this.display = this.carService.getCars().join(' ⭐️ ');
  }



}
