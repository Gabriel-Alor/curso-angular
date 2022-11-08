import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes      : string[] = ['SpierMan','IronMan','Hulk','Thor','Viuda Negra'];
  public heroeBorrado: string= "";
  
  public borrarHeroe(): void {
    console.log('Borrando....');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
