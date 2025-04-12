import { Component, inject, Injectable } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserProfile } from './userprofile.component';
import { ChildComponent } from './child.component';
import { comentsComponent } from './coments.component';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//Creando Servicios inyectados
import { carService } from './car.service';

//Tuberias (Pipe)
import { UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

//import * as $ from 'jquery';
declare var $:any

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UserProfile, ChildComponent, comentsComponent, NgOptimizedImage, ReactiveFormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
  // templateUrl: './app.component.html',
  template:`
  <div class="container">
    <nav>
    <!-- Antes de routerLink se usa el href -->
    <a routerLink="/">Inicio</a>
    |
    <a routerLink="/user">User</a>
    </nav>
    <router-outlet></router-outlet>
    <hr>
    <!-- Formulario Reactivo -->
<form [formGroup]="profileForm" (ngSubmit)="mostrar()">
    <div class="mb-3 mt-3">
    <label for="nombre" class="form-label">Nombre:</label>
    <!-- Antes  -->
    <!-- <input type="text" class="form-control" id="name" placeholder="Ingrese nombre" name="nombre"> -->
    <!-- Despues -->
    <input type="text" class="form-control" id="name" placeholder="Ingrese nombre" formControlName="nombre">
    </div>
    <div  class="mb-3 mt-3">
    <label for="correo" class="form-label">Correo:</label>
    <!-- Despues -->
    <input type="email" class="form-control" id="correo" placeholder="Ingrese Correo" formControlName="correo">
    </div>
    <div class="form-grop" id=datos>
    <h2>Datos del Formulario con perfil del usuario</h2>
      <p>Nombre: {{profileForm.value.nombre}}</p>
      <p>Correo: {{profileForm.value.correo}}</p>
    </div>
    <div>
  <button id="btnEnviar" [disabled]="!profileForm.valid" type="submit" class="btn btn-warning">Mostrar</button>
    </div>
<div>
<label for="">Todos los vehículos</label>
<!-- Se comenta dado que se accede al servicio vía constructor y no injección -->
  <!-- <p>{{carService.getCars()}}</p> -->
</div>
<div>
  <label for="">Vehículo número 4</label>
  <!-- <p>{{carService.getCar(3)}}</p> -->
</div>
<div>
  <label for="">Vehículo número 4</label>
  <p>{{display}}</p>
</div>

 <div>
  <h2>Uso de Tuberías (Pipe)</h2>
  {{loudMessage | uppercase }}
  <br>
  {{username | lowercase }}
  <br>
  número: {{number | number:'3.2-2' }}
  <br>
  Fecha de Nacimiento: {{fechaNacimineto | date:'medium' }}
  <br>
  Costo: {{costo | currency }}
 </div>

</form>
  <h1>Clase 1 Curso de Angular</h1>
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
  
  <table class="table table-bordered table-dark table-hover">
    <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
  @for(os of operatingSystem; track os.id){
  <tr>
    <td>{{os.id}}</td>
    <td>{{os.name}}</td>
  </tr>
  }
  </tbody>
  </table>
  <hr>
  <h2>estudiantes</h2>
  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Correo</th>
    </tr>
    </thead>
    <tbody>
    @for(estudiante of estudiantes; track estudiante.correo){
      <tr>
        <td>{{estudiante.nombre}}</td>
        <td>{{estudiante.apellido}}</td>
        <td>{{estudiante.correo}}</td>
      </tr>
    }
    </tbody>
  </table>
  <hr>

<user-profile ocupacion="Desarrollador Angular" nombre="Abraham Balda"></user-profile>

<hr>

<h2>Vinvulación de Propiedades</h2>
<img [src]="imageUrl" alt="foto">
<br><br>
<div class="form-group">
<textarea class="form-control" rows=5 [disabled]="!isEditable"></textarea>
</div>

<br>
<h3>Textarea declarado como no editable</h3>
<hr>
<h2>Manejo de eventos</h2>
<button class="btn btn-primary" (click)="saludo()" >saludar</button>

<div class="alert alert-secondary" >
<strong>Este es el mensaje resultado del evento selecciado:</strong> {{mensaje}}
</div>
<br>
<p (mouseover)="moverMouse()">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nisi consectetur excepturi itaque libero? Quae consectetur quos laborum possimus placeat inventore illum dolor repellat sequi provident, quis eveniet aperiam officia!
</p>

<h2>Comunicación de componentes con Output</h2>
<child-component (addItemEvent)="addItem($event)" ></child-component>
<p>Contenido de la posición {{items[items.length-1]}}</p>
<hr>
<h2>Vistas Aplazables</h2>

@defer(on viewport){  
<div>
  <h3>Que opinas acerca de Angular</h3>
  <article>
    <p>1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque velit obcaecati consequatur, officiis reiciendis voluptates molestias incidunt doloribus? Deleniti nulla commodi reiciendis neque incidunt nisi numquam consequuntur cum possimus ratione.</p>
    <p>2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque velit obcaecati consequatur, officiis reiciendis voluptates molestias incidunt doloribus? Deleniti nulla commodi reiciendis neque incidunt nisi numquam consequuntur cum possimus ratione.</p>
    <p>3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque velit obcaecati consequatur, officiis reiciendis voluptates molestias incidunt doloribus? Deleniti nulla commodi reiciendis neque incidunt nisi numquam consequuntur cum possimus ratione.</p>
    </article>
  <coments></coments>
</div>
}@placeholder(minimum 1s) {
  <p>Futuros Comentarios</p>
}@loading(minimum 2s) {
  <p>Cargando Comentarios</p>
}
<hr>


<h2>Optimización de Imagnenes</h2>

<ul>
  <li>
    Imagen Estática
    <img ngSrc="img/2.jfif" alt="Imagen paisaje número 2" width="100" height="80">
  </li>
  <li>
    Imagen Dinámica
    <img [ngSrc]="imgUrl" [alt]="imgAlt" width="100" height="80">
  </li>
</ul>

</div>
`
,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //atributos de la clase

  mensaje="";
  display="";
  
  //Uso de tuberias(Pipe)
  loudMessage="nosotros pensamos que hacemos algo grande";
  username="ABRAHAMBALDA";

  number=12345.6789;
  //cuenta desde 0 los meses
  fechaNacimineto=new Date(2005, 1, 12);
  costo=20501;

  ctrlMostrar=true;
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

items= new Array();

//Vinculación de Propiedades

imageUrl="img/1.jfif";
isEditable=true;

//Métodos de la Clase

saludo(){
this.mensaje="Hola. Saludo generado como respuesta al evento click";
}
moverMouse(){
  this.mensaje="Usted movió el mouse sobre el parrafo!";
}

//Comuciación de Componentes con @Output

addItem(item:string){
  this.items.push(item);
  console.log(this.items);
}

// Optimización de imagenes
imgUrl = "img/3.jfif";
imgAlt = "Imagen paisaje número 3";

//Formas reactivas
// handleSubmit(){
//   alert("Nombre: "+this.profileForm.value.nombre + " | " +"Correo: "+ this.profileForm.value.correo)
// }

mostrar(){
  if(this.ctrlMostrar){
    $("#datos").show(1000);
    this.ctrlMostrar=false;
    $("#btnEnviar").html("Ocultar");
  }
  else{
    $("#datos").hide(1000);
    this.ctrlMostrar=true;
    $("#btnEnviar").html("Mostrar");
  }
}

//Declaración para formas reactivas en Angular
profileForm=new FormGroup({
  nombre: new FormControl('', Validators.required),
  correo: new FormControl('', [Validators.required, Validators.email]),
})

//Creando Servicios inyectados
// Se coloca en comentario dado que se ha pasado el servicio como atributo del constructor de la clase

// carService=inject(carService);

//Al iniciar la clase
constructor(private carService:carService){
  this.display=this.carService.getCars().join(' ⭐ ');
}
}
