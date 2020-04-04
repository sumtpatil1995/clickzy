import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FusionChartsModule } from "angular-fusioncharts";

import { ToolbarComponent} from './toolbar/toolbar.component';
import {MaterialModule} from '../core/material/material.module';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NgxEchartsModule } from 'ngx-echarts';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { AccountListComponent } from './account-list/account-list.component';
import { ClicksVsConversionComponent } from './clicks-vs-conversion/clicks-vs-conversion.component';
import { SectionFiveComponent } from './section-five/section-five.component';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
         RouterModule,
         ChartsModule,
         FusionChartsModule,
         NgxChartsModule,
         NgxEchartsModule
     ],
    declarations: [
        ToolbarComponent,
        NavBarComponent,
        DoughnutChartComponent,
        BarChartsComponent,
        AccountListComponent,
        ClicksVsConversionComponent,
        SectionFiveComponent
    ],
    exports: [
        ToolbarComponent ,DoughnutChartComponent,BarChartsComponent, AccountListComponent,
        ClicksVsConversionComponent, SectionFiveComponent  ]
})
export class HelpersModule {}