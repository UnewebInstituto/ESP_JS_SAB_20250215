import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LoginComponent } from './login/login.component';
import { PieComponenet } from './pie/pie.component';

@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, LoginComponent, PieComponenet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliente';
}
