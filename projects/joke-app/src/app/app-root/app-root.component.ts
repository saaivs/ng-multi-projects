import { Component } from '@angular/core';
import { JokeService } from '@joke-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent {
  
  message: string;

  constructor(jokeService: JokeService) {
    this.message = jokeService.getText();
  }
  
}
