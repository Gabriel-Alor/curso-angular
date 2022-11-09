import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Gohan',
          poder: 4000
        },
        {
          nombre: 'goku',
          poder: 15000
        }
    ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor() {
    
    }

    addPersonaje( personaje:Personaje ): void {
        this._personajes.push( personaje );
    }


}