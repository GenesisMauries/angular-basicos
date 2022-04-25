import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  get personajes() {
    return this.dbzService.personajes
  }
// Inyeccion de servicios
  constructor(private dbzService: DbzService) {}

}
