import { Component} from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent{
    nombre: string = "IronMan"
    edad: number = 42
    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase()
    }
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }
    cambiarNombre(): string{
        return this.nombre = "Sipiderman"
    }
    cambiarEdad(): number{
        return this.edad = 22
    }
}