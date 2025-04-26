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
  email : string = '';
  password: string = '';


constructor(private http:HttpClient ){};


onSubmit(){
  //creacion del objeto json
  const user= {emailTmp: this.email, passwordTmp:this.password};

  //envio a traves del metodo
  this.http.post('http://localhost:3005/login', user).subscribe(response=> {
    console.log('login exitoso');
    alert('login exitoso');
  },error=>{
   console.log('error en el login');
   alert('error en el login')
  
  })
}
}

