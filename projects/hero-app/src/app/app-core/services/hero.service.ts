import { Injectable, FactoryProvider, Optional, SkipSelf } from '@angular/core';

/*
const factory = (self: HeroService) => {
  console.log('heroServiceFactory', self);
  return self ? self : new HeroService(null);
};
*/

function delay(ms: number): Promise<void> {
  return new Promise<any>((resolve) => setTimeout(resolve, ms));
}

@Injectable()
export class HeroService {

  /*
  static PROVIDER(): FactoryProvider {
    return {
      provide: HeroService,
      useFactory: factory,
      deps: [HeroService]
    };
  }
  */

  constructor(@Optional() @SkipSelf() instance: HeroService) {
    if (instance) {
      throw new Error(`HeroService already created`);
    }
    console.log('Create HeroService instance');
  }

  getAppName(): string {
    return 'Hero app';
  }

  getDetailsDescription(id: number): string {
    return `#ID: ${id}`;
  }

  async getDelayedValue(value: number): Promise<number> {
    await delay(3000);
    return value;
  }

}
