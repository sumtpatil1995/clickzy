import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { ToolbarComponent} from './toolbar/toolbar.component';
import {MaterialModule} from '../core/material/material.module';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
         RouterModule,
         ChartsModule
     ],
    declarations: [
        ToolbarComponent,
        NavBarComponent,
        DoughnutChartComponent
    ],
    exports: [
        ToolbarComponent ,DoughnutChartComponent   ]
})
export class HelpersModule {}