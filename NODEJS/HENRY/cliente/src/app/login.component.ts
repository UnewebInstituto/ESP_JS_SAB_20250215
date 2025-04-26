import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'cliente';
  email: string = '';
  password: string = '';

  // Se inicializa la clase con el contructor del objeto http
  constructor(private http:HttpClient){};

  onSubmit(){
    // Creación del objeto json con los datos a transmitir
    const user = {emailTmp: this.email, passwordTmp: this.password};
    // Envío a través del método post al endpoint (app.js en el servidor)
    this.http.post('http://localhost:3000/login', user)
    .subscribe(response=>{
        console.log('Login exitoso');
        alert('Login exitoso');
      },error=>{
        console.log('Error en el login');
        alert('Error en login');
      })

  }
}
