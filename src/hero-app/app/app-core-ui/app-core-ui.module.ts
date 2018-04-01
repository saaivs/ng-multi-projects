import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppCoreModule } from '../app-core/app-core.module';

@NgModule({
  imports: [
    CommonModule, AppCoreModule
  ],
  declarations: [PageNotFoundComponent]
})
export class AppCoreUIModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCoreUIModule,
      providers: []
    };
  }

}
