import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone:true,
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'login';
  email:string="";
  password:string="";

   //Se inicializa la clase con el constructor del objeto http
   constructor(private http:HttpClient) {
  
   };

  onSubmit(){
    //Creación del objeto con los datos a transmitir
    const user={
      emailtmp:this.email,
      passwordtmp:this.password
    }
   
    //Envio a traves del método POST
    this.http.post('http://localhost:3003/login', user).subscribe(
      response=>{
        console.log("Login éxitoso");
        alert("Login éxitoso");

      }, 
      error=>{
        console.log("Error en el login");
        alert("Error en el login");
      })
  }
}
