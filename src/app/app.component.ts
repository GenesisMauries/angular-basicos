import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nombre del componente
  templateUrl: './app.component.html', // Indicamos si tiene contraparte de HTML
  // template: '<span>Directo sin un archivo extra</span>', // No debe ser mayor a 3 lineas
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Contador App';
}


