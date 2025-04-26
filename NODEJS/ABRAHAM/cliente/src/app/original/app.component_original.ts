import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component_original.html',
  styleUrl: './app.component_original.css'
})
export class AppComponent {
  title = 'cliente';
}
