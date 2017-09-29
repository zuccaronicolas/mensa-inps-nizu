//Import necessari
import { Component } from '@angular/core';

//Decorator = Metadati & Template a quello che sta dopo
// oggetto JSON
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Class TypeScripts
export class AppComponent {
  title = 'Mensa INPS';
}
