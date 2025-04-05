import {Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `<button class='btn btn-warning'(click)='agregarItem();onClick()'>Añadir Item
  </button>
  
  
  `,

})
export class ChildComponent {
  //-----------atributo
  @Output() contadorDeEventos = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();

   contador = 0; 
  // Método
  agregarItem(){
    this.addItemEvent.emit(this.contador + ':' + 'ADD')      
  };

  onClick(){
    this.contador++;
    this.contadorDeEventos.emit(this.contador);
    console.log(this.contador);
  }
}