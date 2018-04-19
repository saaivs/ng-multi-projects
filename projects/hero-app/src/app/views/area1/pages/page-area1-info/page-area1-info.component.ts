import { Component, OnInit } from '@angular/core';
import { HeroService } from '@hero/app-core/services';

@Component({
  selector: 'app-page-area1-info',
  templateUrl: './page-area1-info.component.html',
  styleUrls: ['./page-area1-info.component.scss']
})
export class PageArea1InfoComponent implements OnInit {

  value: number;

  constructor(
    private heroService: HeroService
  ) {
    this.value = 1;
  }

  async ngOnInit() {
    this.value = await this.heroService.getDelayedValue(42);
  }

}
