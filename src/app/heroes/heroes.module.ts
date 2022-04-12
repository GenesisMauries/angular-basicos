import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component'
import { CommonModule} from '@angular/common';

@NgModule({
     // Que COMPONENTES contiene mi modulo, solo es visible para este modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Exporta el componente fuera del modulo, las hacemos PUBLIC
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    // Solo modulos
    imports: [
        // Ofrece directivas
        CommonModule, 
    ]
})

export class HeroeModule { }