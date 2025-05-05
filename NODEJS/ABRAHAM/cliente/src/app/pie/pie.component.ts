import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../mensaje.service';

@Component({
  standalone:true,
  selector: 'app-pie',
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponenet {
  title="pie";
  mensaje:string="";
  codigo:number=0;

  constructor(private mensajeService:MensajeService){

  }

  ngOnInit(){
    // this.mensajeService.currentMessage.subscribe(mensaje=>{
    //   this.mensaje=mensaje
    // })

    this.mensajeService.currentMessage.subscribe(data=>{
      this.codigo=data.codigo;
      this.mensaje=data.mensaje;
    })
  }
}
