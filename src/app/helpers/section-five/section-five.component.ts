import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.css']
})
export class SectionFiveComponent implements OnInit {
  colours = ['#e061ae','#4ea2da','#f9db5b','#75e0e3'];
  option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      bottom: 10,
      right: 10,
        textStyle: {
          color: 'gray'
        },
      /*   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'] */
    },
    series: [
        {
            name: 'Click',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            textStyle: {
              color: 'white'
            },
            color:this.colours,
            label: {
                name:'test',
                show: true,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
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
                {value: 400, name: 'data 3'},
            ]
        }
    ]
};
  constructor() { }

  ngOnInit() {
  }

}
