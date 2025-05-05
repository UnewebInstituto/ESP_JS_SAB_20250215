import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajeService } from './mensaje.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // Se inicializa la clase con el contructor del objecto http
  constructor(private http: HttpClient, private mensajeService: MensajeService){};

  onSubmit(){
    //Creacion del objecto json con los datos a transmitir
    const user = {emailTmp: this.email, passwordTmp: this.password};
    //Envio a traves del metodo Post al endpoint (app.js en el servidor)
    this.http.post('http://localhost:3004/login', user)
    .subscribe((response: any)=>{
      console.log(response);
      
        console.log('Login exitoso');
        //alert('Login exitoso');
        //this.mensajeService.cambiarMensaje('El usuario ha sido validado con éxito.')
        this.mensajeService.cambiarMensaje(response.error.code, response.message);
      }, (error: any)=>{
        console.log(error);
        console.log('Error en el login');
        //this.mensajeService.cambiarMensaje('Error: Usuario o contraseña no válidos.')
        //alert('Error en el login')
        //this.mensajeService.cambiarMensaje(error.error.message);
        this.mensajeService.cambiarMensaje(error.error.error.code, error.error.message);
      }
    )
  }

}
