import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  
  selector: 'app-user',
  template:`
    <div>Pagina de Usuario</div>
    <div class="mb-3 mt-3">
    <label for="framework">
      <p>Nombre de Usuario: {{userName}}</p>
      <p>{{userName}} dice que su marco de desarrollo favorito es {{favoriteFramework}}</p>
      Marco de desarrollo Favorito:
      <input class="form-control" type="text" id="framework" [(ngModel)] = "favoriteFramework"/>
    </label>
    <div>
    <button class="btn btn-primary" (click)="showFramework()">Mostrar framework</button>
    </div>
    </div>
  `,
  
  imports:[FormsModule],
})
export class UserComponent{
  userName = 'Maria Peña';
  favoriteFramework = '';
  showFramework(){
    alert(this.favoriteFramework);
  }
}