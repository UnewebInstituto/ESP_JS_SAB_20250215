import {Component, Output, EventEmitter} from '@angular/core';

// user-profile.ts
@Component({
  selector: 'child-component',
  imports:[],
  template: `
  <button (click)="agregarItem(); onClick();" class="btn btn-warning">Añadir Ítem</button>
  `,
  styles:``,
})
export class ChildComponent {
  @Output() contadorDeEventos = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();

  contador=0;
  agregarItem(){
    this.addItemEvent.emit(this.contador + "😀");
  };
   onClick(){
      this.contador++;
      this.contadorDeEventos.emit(this.contador);
   }
}