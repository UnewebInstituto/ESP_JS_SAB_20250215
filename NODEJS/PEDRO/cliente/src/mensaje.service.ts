import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  //private mensajeSource = new BehaviorSubject(<string>(''));
  private mensajeSource = new BehaviorSubject<{codigo:number, mensaje:string}>({codigo:0, mensaje:''});
  currentMensaje = this.mensajeSource.asObservable();
  
  constructor() { }

  cambiarMensaje(codigo:number, mensaje:string){
    this.mensajeSource.next({codigo, mensaje});
  }
}
