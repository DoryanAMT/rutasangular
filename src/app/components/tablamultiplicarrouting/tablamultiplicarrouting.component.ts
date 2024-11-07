import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  templateUrl: './tablamultiplicarrouting.component.html',
  styleUrl: './tablamultiplicarrouting.component.css'
})
export class TablamultiplicarroutingComponent {
  public numero!: number;
  public numeros: Array<number>

  constructor(private _activateRoute: ActivatedRoute
    , private _router: Router
  ){
    this.numero = 0;
    this.numeros = new Array<number>();
  }

  ngOnInit():void{
    this._activateRoute.params.subscribe((parametros: Params) => {
      if(parametros['numero'] != null){
        this.numero = parseInt(parametros['numero'])
      }
    })

    let aux = new Array<number>();
    for (let i = 1; i <= 10; i++) {
      var resultado = this.numero * i
      aux.push(resultado)
    }
    this.numeros = aux
  }

}

