import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const data = {
  chart: {
    caption: "App Publishing Trend",
    subcaption: "2012-2016",
    xaxisname: "Years",
    yaxisname: "Total number of apps in store",
    formatnumberscale: "1",
    plottooltext:
      "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
      "bgColor": "#2d2d2d",
      "borderColor": "#bfbfbf",
      "borderThickness": "2",
    theme: "fusion",
    drawcrossline: "1"
  },
  categories: [
    {
      category: [
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "iOS App Store",
      data: [
        {
          value: "125000"
        },
        {
          value: "300000"
        },
        {
          value: "480000"
        },
        {
          value: "800000"
        },
        {
          value: "1100000"
        }
      ]
    },
    {
      seriesname: "Google Play Store",
      data: [
        {
          value: "70000"
        },
        {
          value: "150000"
        },
        {
          value: "350000"
        },
        {
          value: "600000"
        },
        {
          value: "1400000"
        }
      ]
    },
    {
      seriesname: "Amazon AppStore",
      data: [
        {
          value: "10000"
        },
        {
          value: "100000"
        },
        {
          value: "300000"
        },
        {
          value: "600000"
        },
        {
          value: "900000"
        }
      ]
    }
  ]
};

const multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 1000
      },
      {
        "name": "2011",
        "value": 500
      },
      {
        "name": "2012",
        "value": 600
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 700
      },
      {
        "name": "2011",
        "value": 650
      },
      {
        "name": "2012",
        "value": 550
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 425
      },
      {
        "name": "2011",
        "value": 925
      },
      {
        "name": "2012",
        "value": 575
      }
    ]
  }
];



@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {
  multi: any[] = multi;
  colours = ['#4ea2da','#75e0e3','#f9db5b'];
  width = 450;
  height = 350;
  type = "mscolumn2d";
  dataFormat = "json";
  dataSource = data;

  option = {
    textStyle: {
      color: 'white'
    },
    color: this.colours,
    legend: {
      textStyle: {
        color: 'gray'
      }
    },
    tooltip: {
      // textStyle: {
      //   color: 'gray'
      // }
    },
    dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            {product: 'T1', '2015': 43.3, '2016': 85.8, '2017': 93.7},
            {product: 'T2', '2015': 83.1, '2016': 73.4, '2017': 55.1},
            {product: 'T3', '2015': 86.4, '2016': 65.2, '2017': 82.5},
            {product: 'T4', '2015': 72.4, '2016': 53.9, '2017': 39.1}
        ]
    },
    xAxis: {type: 'category',},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};

  view: any[] = [400, 250];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#316886', '#73d238', '#FFFFFF']
  };

  constructor() {
   

}

  ngOnInit() {
  }

}
