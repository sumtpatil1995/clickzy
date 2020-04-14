import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label} from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts/lib/echarts'

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
  width = 240;
  height = 290;
  type = "doughnut2d";
  dataFormat = "json";
  dataSource = data;
  colours = ['#BFD8C4','#00BE29'];
  option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    width: 190,
    height: 240,
    legend: {
        orient: 'vertical',
        left: 10,
        textStyle: {
          color: 'gray'
        },
      /*   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'] */
    },
    series: [
        {
            name: 'Click',
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            textStyle: {
              color: 'white'
            },
            color:this.colours,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'data 1'},
                {value: 310, name: 'data 2'},
            ]
        }
    ]
};

  
  constructor() { }

  ngOnInit() {
  }

}
