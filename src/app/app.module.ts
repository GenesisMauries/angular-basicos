import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ContadorModule } from './contador/contador.module'
import { AppComponent } from './app.component';
import { HeroeModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

// Decorador
@NgModule({
   // aqui se agregan los componentes para poder usarlos 
  declarations: [
    AppComponent,
  ],
  // aqui se agregan librerias y MODULOS etc
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
