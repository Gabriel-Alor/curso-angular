import { Component,Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  @Input()
  public nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService:DbzService){}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public agregar(): void{
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.addPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }


}
