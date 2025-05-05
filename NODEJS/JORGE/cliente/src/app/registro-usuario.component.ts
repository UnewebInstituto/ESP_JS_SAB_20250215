import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MensajeService } from './mensaje.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  imports: [FormsModule, HttpClientModule,],
  templateUrl: './registro-usuario.component.html',
})
export class RegistroUsuarioComponent {
      /**
       * Declaracion e inicializacion de Variables
       */
    cedula: string = '';
    nombre: string = '';
    apellido: string = '';
    correo_electronico: string = '';
    clave: string = '';
    tipo_usuario: string = '';

    // Llamado al metodo constructor del componente
    constructor(private http: HttpClient, private mensajeService: MensajeService){}

    // Se define metodo que responde a la transmision del formulario
    onSubmit(){
      const nuevoUsuario = {
        cedula: this.cedula,
        nombre: this.apellido,
        apellido: this.apellido,
        correo_electronico: this.correo_electronico,
        clave: this.clave,
        tipo_usuario: this.tipo_usuario
      };

      // Se declara end point que atiende peticion en el servidor
      this.http.post('http://localhost:3004/usuario', nuevoUsuario)
    .subscribe((response: any)=>{
        console.log(response);
        console.log('Usuario creado con éxito');

        this.mensajeService.cambiarMensaje(response.error.code, response.message);
      }, (error: any)=>{
        console.log(error);
        console.log('Error al crear el Usuario');
        this.mensajeService.cambiarMensaje(error.error.error.code, error.error.message);
      })
    }
  }
