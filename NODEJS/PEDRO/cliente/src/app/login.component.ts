import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MensajeService } from '../mensaje.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'login';
  email: string = '';
  password: string = '';

  // Se inicializa la clase con el constructor del objeto http
  constructor(private http:HttpClient, private mensajeService: MensajeService){};

  onSubmit() {
    //Cración del objeto json con los datos a transmitir
    const user = {emailTmp: this.email, passwordTmp: this.password};
    //Envío a traves del método post al ENDPOINT
    this.http.post('http://localhost:3002/login', user)
      .subscribe((response:any) =>{
        console.log(response);
        console.log('Login exitoso');
        //alert('Login exitoso');
        this.mensajeService.cambiarMensaje(response.error.code, response.message); //Envía el mensaje al servicio
      }, (error:any) => {
        console.log(error);
        console.error('Error en el Login');
        //alert('Error en el Login');
        this.mensajeService.cambiarMensaje(error.error.error.code, error.error.message); //Envía el mensaje de error al servicio
      }
    )
  }
}
