import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './components/joke/joke.component';
import { JokeService } from './services/joke.service';

const COMPONENTS = [JokeComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class JokeLibModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JokeLibModule,
      providers: [JokeService]
    };
  }

}
