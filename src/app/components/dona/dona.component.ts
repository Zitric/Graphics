import { Component } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent  {

  public doughnutChartLabels: string[] = ['Series A', 'Series B', 'Series C'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked( e: any ): void {
    console.log(e);
  }

  public chartHovered( e: any ): void {
    console.log(e);
  }

  public randomize(): void {
    const _doughnutChartData: Array<any> = new Array( this.doughnutChartData.length );
    for ( let i = 0, j = this.doughnutChartData.length; i < j; i++ ) {
      _doughnutChartData[i] = Math.floor(( Math.random() * 100 ) + 1 );
    }
    this.doughnutChartData = _doughnutChartData;
  }

}
