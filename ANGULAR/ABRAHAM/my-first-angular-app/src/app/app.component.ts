import { Component } from '@angular/core';
import { UserProfile } from './userprofile.component';
import { ChildComponent } from './child.component';
import { comentsComponent } from './coments.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UserProfile, ChildComponent, comentsComponent, NgOptimizedImage],
  // templateUrl: './app.component.html',
  template:`
  <div class="container">
  <h1>Clase 1 Curso de Angular</h1>
  <hr>
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
    <img ngSrc="img/2.jfif" alt="Imagen paisaje número 2" width="32px" height="32px">
  </li>
  <li>
    Imagen Dinámica
<img [ngSrc]="imgUrl" [alt]="imgAlt" width="100px" height="80px">
  </li>
</ul>

</div>
`
,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //atributos de la clase

  mensaje=""

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

//Optimizacion de imagenes
imgUrl="img/3.jfif";
imgAlt="Imagen paisaje número 3";
}
