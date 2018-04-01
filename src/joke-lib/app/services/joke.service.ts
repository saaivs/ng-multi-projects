import { Injectable } from '@angular/core';

@Injectable()
export class JokeService {

  constructor() {
    console.log('JokeService created');
  }

  getText(): string {
    return 'You are awesome!!!';
  }

}
