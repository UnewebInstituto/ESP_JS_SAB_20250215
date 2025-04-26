import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './app.component.css'
})
export class EncabezadoComponent {
  title = 'encabezado';
  nombre = '';
  apellido = '';
}
