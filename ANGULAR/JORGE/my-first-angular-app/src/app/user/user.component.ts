import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-user',
    template:`
    <div>Pagina de Usuario</div>
    <div class="mb-3 mt-3">
    <label class="form-label" for="framework">
        <p>Nombre de Usuario:{{userName}}</p>
        <p>{{userName}} dice lo siguiente acerca de su 
        Marco de desarrollo favorito:{{favoriteFramework}}</p>
        <input class="form-control" type="text" id="framework" [(ngModel)] = "favoriteFramework" />
    </label>
    <div>
        <button class="btn btn-primary"(click)="showFramework()">Mostrar Framework </button>
    </div>
    </div>`,
    imports: [FormsModule],
}) export class UserComponent {
    userName = 'JORGE BRITO'
    favoriteFramework = '';
    showFramework(){
        alert(this.favoriteFramework);
    }
}