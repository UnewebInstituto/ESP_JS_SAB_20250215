import { Component, Output, EventEmitter } from '@angular/core';


// child-component.ts
@Component({
  selector: 'child-component',
  imports: [],
  template: `<button class="btn btn-warning" (click)="agregaritem();onClick()" >Agregar Item</button>
  
  `,
})
export class ChildComponent { 
  //Atributos
  @Output() contadorDeEventos = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();
  contador = 0;
  //Metodos
  agregaritem(){
    this.addItemEvent.emit(this.contador + ": " + '🐢');
  };

  onClick(){
    this.contador++;
    this.contadorDeEventos.emit(this.contador);
    console.log(this.contador);
  }
 }