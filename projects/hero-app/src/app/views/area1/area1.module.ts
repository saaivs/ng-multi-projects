import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageArea1IndexComponent } from './pages/page-area1-index/page-area1-index.component';
import { PageArea1InfoComponent } from './pages/page-area1-info/page-area1-info.component';
import { CommonLibModule } from '@common-lib/modules';

const routes: Routes = [
  {
    path: '',
    component: PageArea1IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: PageArea1InfoComponent
  }
];

@NgModule({
  imports: [
    CommonModule, CommonLibModule, RouterModule.forChild(routes)
  ],
  declarations: [PageArea1IndexComponent, PageArea1InfoComponent]
})
export class Area1Module { }
