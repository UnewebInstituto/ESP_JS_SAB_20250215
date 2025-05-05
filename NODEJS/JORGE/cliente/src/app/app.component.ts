import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login.component';
import { EncabezadoComponent } from './encabezado.component';
import { PieComponent } from './pie.component';
import { RegistroUsuarioComponent } from './registro-usuario.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, EncabezadoComponent, PieComponent, RegistroUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliente';
}
