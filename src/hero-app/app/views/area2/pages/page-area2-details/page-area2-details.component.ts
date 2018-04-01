import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '@hero/app-core/services';

@Component({
  selector: 'app-page-area2-details',
  templateUrl: './page-area2-details.component.html',
  styleUrls: ['./page-area2-details.component.scss']
})
export class PageArea2DetailsComponent implements OnInit {
  description: string;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.description = this.heroService.getDetailsDescription(id);
  }

}
