import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // Se inicializa la clase con el contructor del objecto http
  constructor(private http: HttpClient){};

  onSubmit(){
    //Creacion del objecto json con los datos a transmitir
    const user = {emailTmp: this.email, passwordTmp: this.password};
    //Envio a traves del metodo Post al endpoint (app.js en el servidor)
    this.http.post('http://localhost:3004/login', user)
    .subscribe(response=>{
        console.log('Login exitoso');
        alert('Login exitoso')
      }, error=>{
        console.log('Error en el login');
        alert('Error en el login')
      }
    )
  }

}
