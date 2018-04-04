import { Component, OnDestroy, OnInit  } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.subscription = this.regresaObservable().subscribe
    ( numero => console.log('subs', numero),
     error => console.error('Error en el obs', error),
     () => console.log('El obs terminó'));
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        let salida = {
          valor: contador
        };
        observer.next(salida);

      }, 500);
    }).retry(2).map((resp: any) => {
      return resp.valor;
    }).filter( (valor, index) => {
      if (( valor % 2) === 1 ) {
        // impar
        return true;
      } else {
        // par
        return false;
      }
    } );
  }
}
