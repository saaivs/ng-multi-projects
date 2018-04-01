import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRootRoutingModule } from './app-root-routing.module';
import { AppRootComponent } from './app-root/app-root.component';


@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppRootRoutingModule
  ],
  bootstrap: [AppRootComponent]
})
export class AppRootModule { }
