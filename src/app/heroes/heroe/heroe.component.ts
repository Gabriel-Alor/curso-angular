import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    public nombre: string = 'IronMan';
    public edad : number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    public obtenerNombre(): string {
        return `${ this.nombre } - ${this.edad}`;
    }

    public cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }

    public cambiarEdad(): void {
        this.edad = 30;
    }
}