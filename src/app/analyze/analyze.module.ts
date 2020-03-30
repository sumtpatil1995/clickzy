import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyzeRoutingModule } from './analyze-routing.module';
import { AnalyzeComponent } from './analyze.component';
import {MaterialModule} from '../core/material/material.module'
import {HelpersModule} from '../helpers/helpers.module';

@NgModule({
  declarations: [AnalyzeComponent,],
  imports: [
    CommonModule,
    AnalyzeRoutingModule,
    MaterialModule,
    HelpersModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AnalyzeModule { }
