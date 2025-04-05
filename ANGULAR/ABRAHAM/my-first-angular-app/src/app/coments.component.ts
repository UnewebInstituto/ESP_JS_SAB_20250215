import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'coments',
  imports: [],
  template: `
<ul>
  <li>Cometario 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, doloremque consectetur? Quo earum magni sed!</li>
  <li>Comentario 2: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas soluta at vitae facere enim pariatur expedita itaque, modi impedit! Dignissimos nobis, mollitia est error ab consequatur neque odit. Deserunt, expedita.</li>
  <li>comentario 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias consequuntur atque illum necessitatibus aut velit accusantium sed, ratione suscipit pariatur ullam voluptate 
  </li>
</ul>  
  `,
  styles:``
})
export class comentsComponent {
  title = 'my-first-angular-app';
}
