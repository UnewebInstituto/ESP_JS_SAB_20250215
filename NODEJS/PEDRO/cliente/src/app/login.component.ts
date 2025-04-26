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
  title = 'login';
  email: string = '';
  password: string = '';

  // Se inicializa la clase con el constructor del objeto http
  constructor(private http:HttpClient){};

  onSubmit() {
    //Cración del objeto json con los datos a transmitir
    const user = {emailTmp: this.email, passwordTmp: this.password};
    //Envío a traves del método post al ENDPOINT
    this.http.post('http://localhost:3002/login', user)
      .subscribe(response =>{
        console.log('Login exitoso');
        alert('Login exitoso')
        //this.mensajeServicio.cambiarMensaje('Login exitoso'); //Envía el mensaje al servicio
      }, error => {
        console.error('Error en el Login');
        alert('Error en el Login');
      }
    )
  }
}
