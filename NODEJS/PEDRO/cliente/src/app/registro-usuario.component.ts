import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MensajeService } from '../mensaje.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './registro-usuario.component.html'
})

export class RegistroUsuarioComponent {
  //Declaración e inicialización de variables
  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  correo_electronico: string = '';
  clave: string = '';
  tipo_usuario: string = '';

  //Constructor del componente
  constructor(private http: HttpClient, private mensajeService: MensajeService) {};

  //Se define meétodo que responde a la transmisión del formulario
  onSubmit() {
    const nuevoUsuario = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      correo_eletronico: this.correo_electronico,
      clave: this.clave,
      tipo_usuario: this.tipo_usuario
    }

    //Se declara end point que atiende petición del servidor
    this.http.post('http://localhost:3002/usuario', nuevoUsuario)
      .subscribe((response:any) =>{
        console.log(response);
        console.log('Usuario creado con éxito');
        this.mensajeService.cambiarMensaje(response.error.code, response.message); //Envía el mensaje al servicio
      }, (error:any) => {
        console.log(error);
        console.error('Error al crear el usuario');
        this.mensajeService.cambiarMensaje(error.error.error.code, error.error.message); //Envía el mensaje de error al servicio
      }
    )
  }
}
