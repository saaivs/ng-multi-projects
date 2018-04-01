import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from './services';
import { AuthGuard } from './guards';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class AppCoreModule {


  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCoreModule,
      providers: [HeroService, AuthGuard]
    };
  }


}
