import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooBarService {

  constructor() {
    console.log('FooBarService created');
  }

  getGreetingText(): string {
    return 'Hello, World!!!';
  }

}
