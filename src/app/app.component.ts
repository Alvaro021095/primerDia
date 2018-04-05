import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
  author = 'Juan Herrera';
  count = 0;
  imgSource = './../favicon.ico';
  habilitado = false;
  show = false;
  students = ['Alvaro', 'Kevin'];
  people = ['Juan', 'Kevin', 'Cristian', 'Diego'];

  habilitar() {
    this.habilitado = !this.habilitado;
  }
}
