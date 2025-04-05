import { Component, Output, EventEmitter } from "@angular/core";
@Component({
    selector: 'child-component',
    template: `<button class='btn btn-warning' (click)='agregarItem();onClick();'>Agregar Item</button>`
  })
  export class ChildComponent { 
    /* Your component code goes here */ 
    // Atributo
    @Output() contadorDeEventos = new EventEmitter<number>();
    @Output() addItemEvent = new EventEmitter<string>();
    contador = 0;
    // Método
    agregarItem(){
        this.addItemEvent.emit(this.contador + ':' + '🐢');
    };

    onClick(){
        this.contador++;
        this.contadorDeEventos.emit(this.contador);
        console.log(this.contador);
    }
}