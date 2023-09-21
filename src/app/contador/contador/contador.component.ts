import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1 style="text-align: center;">Bienvenido a {{titulo}}</h1>
    <button (click)=cambiarNum(-base)> - {{base}}</button>
    <span>{{numero}}</span>
    <button (click)=cambiarNum(base)> + {{base}}</button>
    `
})

export class contadorComponent {
    titulo: string = 'Contador App';
    //Por defecto las variables son públicas
    numero: number = 10;
    //En principio el ; es opcional
    
    base: number = 5;
    cambiarNum(valor: number) {
        this.numero += valor;
    }
}