import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector:'app-user',
  template: `
    <div>Página de Usuario</div>
    <div class="mb-3 mt-3">
      <label class="form-label" for="framework">
        <p>Nombre de Usuario: {{username}}</p>
        <p>{{username}} dice lo siguiente acerca de su marco de desarrollo favorito: {{favoriteFramework}}</p>
        Marco de desarrollo favorito:
        <input class="form-control" type="text" id="framework" [(ngModel)] = "favoriteFramework" />
      </label>
      <div>
        <button class="btn btn-primary" (click)="showframework()">Mostrar 
        Framework</button>
      </div>
    </div>
  `,
  imports: [FormsModule],
})

export class UserComponent{
  username = "Pedro Balda";
  favoriteFramework="";

  showframework(){
    alert(this.favoriteFramework);
  }
}