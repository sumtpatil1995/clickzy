import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label} from 'ng2-charts';
declare var CanvasJS: any;
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  doughnutChartLabels: Label[] = [];
  options: [{
    radius: "90%", 
    innerRadius: "75%",
  }]
  doughnutChartData: MultiDataSet = [
    [70, 30],[],[]
  ];
  public doughnutChartColors: any[] = 
[
    {
        backgroundColor: [
          'rgb(118, 191, 89)',
           'rgb(199, 199, 199)',
           ],
        borderColor: 'rgb(255, 255, 255)',
    }
]
  doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
