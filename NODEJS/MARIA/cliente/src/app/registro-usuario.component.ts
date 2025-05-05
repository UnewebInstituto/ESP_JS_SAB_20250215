import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MensajeService } from './mensaje.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-registro-usuario',
  imports:[FormsModule, HttpClientModule,RouterLink],
  templateUrl: './registro-usuario.component.html',
  //styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  //Declaracion e inicializacion de variables
  cedula: string='';
  nombre: string='';
  apellido: string='';
  correo_electronico: string='';
  clave: string='';
  tipo_usuario: string='';

  //llamado al metodo contructor del cliente
  constructor(private http:HttpClient, private mensajeService: MensajeService){ }

  //se define metodo que respinde a la transmision del formulario
  onSubmit(){
    const nuevoUsuario = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      correo_electronico: this.correo_electronico,
      clave:this.clave,
      tipo_usuario:this.tipo_usuario
    }
    // se declara emd point que atiende peticion en el servidor 
    this.http.post('http://localhost:3001/usuario', nuevoUsuario)
    .subscribe((response:any)=>{
      console.log(response);
      console.log('Usuario creado con exito');
     this.mensajeService.cambiarMensaje(response.error.code, response.message);
    },(error:any)=>{
      console.log(error);
      console.error('Error al crear usuario');
     this.mensajeService.cambiarMensaje(error.error.error.code, error.error.message);
  })
}
}