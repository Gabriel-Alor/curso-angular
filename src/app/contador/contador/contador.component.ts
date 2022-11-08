import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular(base)"> + {{ base }} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base)"> - {{ base }} </button>    

    `
})

export class ContadorComponent {
    //propiedad
    public titulo :string = 'Contador App';
    //propiedad
    public numero :number = 10;
    //propiedad
    public base   :number = 5;

    //Método sumar
    sumar():void{
        this.numero += 1;
    }
    //Método restar
    restar():void{
        this.numero -= 1;
    }

    //Forma más simple de hacer el contador
    acumular( valor: number ): void{
        this.numero += valor;
    }
}