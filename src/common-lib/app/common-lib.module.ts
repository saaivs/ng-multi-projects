import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooBarComponent } from './components/foo-bar/foo-bar.component';
import { FooBarService } from './services/foo-bar.service';
import { FooBarInnerComponent } from './components/foo-bar-inner/foo-bar-inner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooBarComponent, FooBarInnerComponent],
  exports: [FooBarComponent]
})
export class CommonLibModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonLibModule,
      providers: [FooBarService]
    };
  }

}
