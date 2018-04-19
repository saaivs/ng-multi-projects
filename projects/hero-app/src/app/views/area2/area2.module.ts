import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageArea2IndexComponent } from './pages/page-area2-index/page-area2-index.component';
import { PageArea2DetailsComponent } from './pages/page-area2-details/page-area2-details.component';

const routes: Routes = [
  {
    path: '',
    component: PageArea2IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: PageArea2DetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [PageArea2IndexComponent, PageArea2DetailsComponent]
})
export class Area2Module { }
