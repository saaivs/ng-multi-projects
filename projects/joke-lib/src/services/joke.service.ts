import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor() {
    console.log('JokeService created');
  }

  getText(): string {
    return 'You are awesome!!!';
  }

}
