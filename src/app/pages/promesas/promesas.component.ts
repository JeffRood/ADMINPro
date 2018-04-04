import { Component, OnInit } from '@angular/core';
import { resolve, reject } from 'q';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then( () => console.log('Terminó!')).catch( error => console.error('Error!', error));
   }
  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          // reject('Tu no sirve mi loco!');
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
