import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent{
    public name : string ='Iron Man';
    public age  : number = 45;
    // getters
    get capitalizeName(): string {
        return this.name.toLocaleUpperCase()
    };
    getName(): string { return `${ this.name} ${ this.age}`};

    changeName():void{
        this.name = 'Spiderman'
    }
    changeAge():void{
        this.age = 20;
    }
}