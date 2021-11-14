import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib3Module } from 'lib3';
import { Lib2Module } from 'lib2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Lib3Module,
    Lib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
