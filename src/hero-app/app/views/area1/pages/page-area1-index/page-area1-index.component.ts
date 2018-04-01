import { Component, OnInit } from '@angular/core';
import { FooBarService } from '@common-lib/services';

@Component({
  selector: 'app-page-area1-index',
  templateUrl: './page-area1-index.component.html',
  styleUrls: ['./page-area1-index.component.scss']
})
export class PageArea1IndexComponent implements OnInit {

  greetingText: string;

  constructor(private fooBarService: FooBarService) {
    this.greetingText = fooBarService.getGreetingText();
  }

  ngOnInit() {
  }

}
