import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';



// user-profile.ts
@Component({
  selector: 'app-user',
  imports:[FormsModule],
  template: `
  <div>Página de Usuario</div>
  <p>Nombre de Usuario {{username}}</p>
  <p>{{username}} dice lo siguiente acerca de su marco de desarrollo favorito {{favoriteFramework}}</p>


  <div class="form-group">
  <label class="form-label" for="framework"></label>
  Marco de Desarrollo favorito:
  <input class="form-control" type="text" id="framework" [(ngModel)]="favoriteFramework">
  </div>
  <div class="form-group">
  <button (click)="showFramework()" class="btn btn-primary">Mostrar framework</button>
  </div>
  
  `,
  styles:``,
})
export class UserComponent {
  username="AbrahamBalda";
  favoriteFramework="";

  showFramework(){
    alert("Es "+this.favoriteFramework+" una excelente alternativa");
  }

}