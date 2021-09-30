import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Thor',
    'Hulk',
    'Ironman',
    'Capitan America',
  ];
  eresed :string= '';

  eraseHero() {
   this.eresed = this.heroes.shift() || '';
  }
}
