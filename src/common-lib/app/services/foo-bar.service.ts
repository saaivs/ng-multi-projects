import { Injectable } from '@angular/core';

@Injectable()
export class FooBarService {

  constructor() {
    console.log('FooBarService created');
  }

  getGreetingText(): string {
    return 'Hello, World!!!';
  }

}
