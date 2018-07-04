import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRootComponent } from './app-root/app-root.component';
import { CommonLibModule } from '@common-lib';
import { JokeLibModule } from '@joke-lib';

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    JokeLibModule.forRoot(),
    CommonLibModule.forRoot()
  ],
  bootstrap: [AppRootComponent]
})
export class AppRootModule { }
