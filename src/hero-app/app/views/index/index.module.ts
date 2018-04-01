import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageIndexComponent } from './pages/page-index/page-index.component';

const routes: Routes = [
  {
    path: '',
    component: PageIndexComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [PageIndexComponent]
})
export class IndexModule { }
