import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label} from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
declare var CanvasJS: any;
const data = {
  chart: {
    caption: "Click Through rate",
    subcaption: "For all users in 2017",
    showpercentvalues: "1",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "<b>$percentValue</b> of our Android users are on <b>$label</b>",
    centerlabel: "# Users: $value",
    "bgColor": "#2d2d2d",
    "borderColor": "#bfbfbf",
    "borderThickness": "2",
    theme: "fusion"
  },
  data: [
    {
      label: "",
      value: "1000"
    },
    {
      label: "",
      value: "5300"
    },
  ]
};



@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  width = 300;
  height = 300;
  type = "doughnut2d";
  dataFormat = "json";
  dataSource = data;
  
  constructor() { }

  ngOnInit() {
  }

}
