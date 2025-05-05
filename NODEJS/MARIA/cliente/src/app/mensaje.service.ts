import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  //private mensajeSoucer = new BehaviorSubject<string>('');
  private mensajeSoucer = new BehaviorSubject<{codigo:number,mensaje:string}>({codigo:0,mensaje:''});
  currentMensaje = this.mensajeSoucer.asObservable();

  constructor() { }

  /* cambiarMensaje(codigo: number, mensaje:string){
     this.mensajeSoucer.next(mensaje);
   } */

  cambiarMensaje(codigo: number, mensaje:string){
    this.mensajeSoucer.next({codigo, mensaje});
  }
}
