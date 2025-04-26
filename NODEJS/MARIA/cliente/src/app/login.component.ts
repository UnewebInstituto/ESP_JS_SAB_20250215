import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'login';
  email: string = '';
  password:string = '';

//se inicializa la clase con el contructor dek objeto http
constructor(private http:HttpClient){};

  onSubmit(){
    //Creacion de objeros json con los datos a transmitir
    const user = {emailTmp: this.email, passwordTmp: this.password};
    //envio a traves del metodo post
    this.http.post('http://localhost:3001/login', user)
    .subscribe(response=>{
      console.log('Login exitoso');
      alert ('Login exitoso');
    },error=>{
      console.error('Error en el login');
      alert ('Error en el Login');
  })
  }
}
