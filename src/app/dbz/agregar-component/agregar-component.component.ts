import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-component',
  templateUrl: './agregar-component.component.html',
})
export class AgregarComponentComponent {

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }
  constructor(private dbzService: DbzService){}
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  // No es necesario hacer full refresh al 
  // presionar un boton y angular recibe el 
  // evento con $ signo de dolar
  // agregar(event: any): void {
  //   event.preventDefault();
  //   console.log("Hola")
  // }
  agregar(): void {

    if (this.nuevo.nombre.trim().length === 0) {
      return
    }
    this.dbzService.agregarPersonajes(this.nuevo)
    this.nuevo = {
      nombre: "",
      poder: 0
    }

  }
}
