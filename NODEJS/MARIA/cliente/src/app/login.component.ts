import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MensajeService } from './mensaje.service';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'login';
  email: string = '';
  password:string = '';

//se inicializa la clase con el contructor dek objeto http
constructor(private http:HttpClient, private mensajeService: MensajeService){};

  onSubmit(){
    //Creacion de objeros json con los datos a transmitir
    const user = {emailTmp: this.email, passwordTmp: this.password};
    //envio a traves del metodo post
    this.http.post('http://localhost:3001/login', user)
    .subscribe((response:any)=>{
      console.log(response);
      console.log('Login exitoso');
      //alert ('Login exitoso');
     // this.mensajeService.cambiarMensaje('El usuario ha sido validado con exito.')
     this.mensajeService.cambiarMensaje(response.error.code, response.message);
    },(error:any)=>{
      console.log(error);
      console.error('Error en el login');
      //alert ('Error en el Login');
     this.mensajeService.cambiarMensaje(error.error.error.code, error.error.message);
  })

  }
}
