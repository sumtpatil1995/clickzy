import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './core/material/material.module';
import { FusionChartsModule } from "angular-fusioncharts";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelpersModule} from './helpers/helpers.module';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HelpersModule,
    FusionChartsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  exports:[FusionChartsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
