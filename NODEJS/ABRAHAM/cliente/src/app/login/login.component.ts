import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MensajeService } from '../mensaje.service';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  standalone:true,
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule,RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'login';
  email:string="";
  password:string="";

   //Se inicializa la clase con el constructor del objeto http
   constructor(private http:HttpClient, private mensajeService:MensajeService) {
   };

  onSubmit(){
    //Creación del objeto con los datos a transmitir
    const user={
      emailtmp:this.email,
      passwordtmp:this.password
    }
   
    //Envio a traves del método POST
    this.http.post('http://localhost:3003/login', user).subscribe(
      (response:any)=>{
        console.log(response);
        console.log("Login éxitoso");
        this.mensajeService.cambiarMensaje(response.error.code ,response.message)
        // this.mensajeService.cambiarMensaje("El usuario ha sido validado con éxito")
      }, 
      (error:any)=>{
        console.log(error);
        console.log("Error en el login");
        // this.mensajeService.cambiarMensaje("Error: Usuario o contraseña no validos")
        this.mensajeService.cambiarMensaje(error.error.error.code , error.error.message)
        // this.mensajeService.cambiarMensaje(error.error.message)
      })
  }
}
