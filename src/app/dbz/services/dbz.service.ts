import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [{
        nombre: "Goten",
        poder: 10000
    },
    {
        nombre: "Yajirobe",
        poder: 1000
    },
    {
        nombre: "Krilin",
        poder: 700
    },
    {
        nombre: "Goku",
        poder: 15000
    },
    {
        nombre: "Vegeta",
        poder: 8500
    },
    {
        nombre: "Mr. Satan",
        poder: 500
    }
    ]
    // Obtenemos la informacion del arreglo de personajes
    get personajes(): Personaje[] {
        return [...this._personajes]
    }
    constructor() {
        console.log("Servicio inicializado")
    }
    agregarPersonajes(personaje: Personaje): void {
        this._personajes.push(personaje)
    }
}