import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib3Module } from 'lib3';
import { Lib1Module } from 'projects/lib1/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Lib3Module,
    Lib1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
