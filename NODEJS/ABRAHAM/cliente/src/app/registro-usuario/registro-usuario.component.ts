import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeService } from '../mensaje.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  //Declaracion de variables
  cedula:string="";
  nombre:string="";
  apellido:string="";
  correo_electronico:string="";
  clave:string="";
  tipo_usuario:string="";

  //llamdo al método constructor
  constructor(private http: HttpClient, private mensajeService:MensajeService){

  }
//se declara endpoint que atiende petición en el servidor
  onSubmit(){
    const nuevoUsuario={
      cedula:this.cedula,
      nombre:this.nombre,
      apellido:this.apellido,
      correo_electronico:this.correo_electronico,
      clave:this.clave,
      tipo_usuario:this.tipo_usuario
    }

     //Envio a traves del método POST
     this.http.post('http://localhost:3003/usuario', nuevoUsuario).subscribe(
      (response:any)=>{
        console.log("Login éxitoso");
        this.mensajeService.cambiarMensaje(response.error.code ,response.message)
      }, 
      (error:any)=>{
        console.log("Error en el login");
        // this.mensajeService.cambiarMensaje("Error: Usuario o contraseña no validos")
        this.mensajeService.cambiarMensaje(error.error.error.code , error.error.message)
      })
  }
}
