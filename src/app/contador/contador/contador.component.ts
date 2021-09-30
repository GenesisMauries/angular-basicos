import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<!-- Los parentesis indican una funcion -->
    <button (click)="add(base)">➕1</button>
    <span>{{ count }}</span>
    <button (click)="add(-base)">➖1</button>`,
})
export class ContadorComponent {
  public count: number = 10;
  public base: number = 5;

  add(valor: number) {
    this.count += valor;
  }
}
