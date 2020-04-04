import { Component, OnInit } from '@angular/core';


const data = {
  chart: {
    caption: "Support Tickets : Clicks VS Conversions",
    yaxisname: "# of Tickets",
    subcaption: "Last week",
    numdivlines: "3",
    showvalues: "0",
    legenditemfontsize: "15",
    legenditemfontbold: "1",
    plottooltext: "<b>$dataValue</b> Tickets $seriesName on $label",
    "bgColor": "#2d2d2d",
    "borderColor": "#bfbfbf",
    "borderThickness": "2",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Jan 1"
        },
        {
          label: "Jan 2"
        },
        {
          label: "Jan 3"
        },
        {
          label: "Jan 4"
        },
        {
          label: "Jan 5"
        },
        {
          label: "Jan 6"
        },
        {
          label: "Jan 7"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Received",
      data: [
        {
          value: "55"
        },
        {
          value: "45"
        },
        {
          value: "52"
        },
        {
          value: "29"
        },
        {
          value: "48"
        },
        {
          value: "28"
        },
        {
          value: "32"
        }
      ]
    },
    {
      seriesname: "Resolved",
      data: [
        {
          value: "50"
        },
        {
          value: "30"
        },
        {
          value: "49"
        },
        {
          value: "22"
        },
        {
          value: "43"
        },
        {
          value: "14"
        },
        {
          value: "31"
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-clicks-vs-conversion',
  templateUrl: './clicks-vs-conversion.component.html',
  styleUrls: ['./clicks-vs-conversion.component.css']
})
export class ClicksVsConversionComponent implements OnInit {
  width = 900;
  height = 400;
  type = "msspline";
  dataFormat = "json";
  dataSource = data;

 colors = ['#5793f3', '#d14a61', '#675bba'];


option = {
    color: this.colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['2015 降水量', '2016 降水量']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: this.colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: this.colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '2015 降水量',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '2016 降水量',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    ]
};
  constructor() { }

  ngOnInit() {
  }

}
