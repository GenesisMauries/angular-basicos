import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

// Decorador
@NgModule({
  // aqui se agregan los componentes para poder usarlos 
  declarations: [
    AppComponent
  ],
  // aqui se agregan librerias y MODULOS etc
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
