import { Component, OnInit } from '@angular/core';
import { HeroService } from '@hero/app-core/services';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  app: string;

  constructor(heroService: HeroService) {
    this.app = heroService.getAppName();
  }

  ngOnInit() {
  }

}
