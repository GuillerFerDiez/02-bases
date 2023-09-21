import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { contadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        contadorComponent
    ],
    exports: [
        contadorComponent
    ],
    imports:[
        //CommonModule  
        //no hace falta porque en el html no utilizamos
        //las directivas *ngIf, *nFor
    ]
})
export class ContadorModule{
    }
