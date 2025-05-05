import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LoginComponent } from './login/login.component';
import { PieComponenet } from './pie/pie.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';


@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, LoginComponent, PieComponenet, RegistroUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliente';
}
