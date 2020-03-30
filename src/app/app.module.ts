import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './core/material/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelpersModule} from './helpers/helpers.module';

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
    HelpersModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
