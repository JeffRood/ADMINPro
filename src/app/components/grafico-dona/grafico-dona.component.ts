import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
// ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
// [350, 450, 100]
// 'doughnut'
export class GraficoDonaComponent implements OnInit {
   @Input('ChartLabels')public doughnutChartLabels: string[] = [] ;
   @Input('ChartData')public doughnutChartData: number[] = [] ;
   @Input('ChartType')public doughnutChartType: string = '' ;

   // tslint:disable:no-trailing-whitespace



  constructor() { }


  ngOnInit() {
  }


}
