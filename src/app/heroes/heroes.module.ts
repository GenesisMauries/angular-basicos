import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    // Que COMPONENTES contiene mi modulo, solo es visible para este modulo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // Exporta el componente fuera del modulo, las hacemos PUBLIC
    exports: [
        ListadoComponent
    ],
    // Modulos
    imports: [
        // Ofrece directivas
        CommonModule
    ]

})

export class HeroesModule {}