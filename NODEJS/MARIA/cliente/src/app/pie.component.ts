import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-pie',
  imports:[],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {
  title = 'pie';
  mensaje = '';
}
