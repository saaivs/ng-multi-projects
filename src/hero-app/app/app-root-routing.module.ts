import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCoreUIModule, PageNotFoundComponent } from './app-core-ui';
import { AppCoreModule, AuthGuard } from './app-core';
import { CommonLibModule } from '@common-lib/modules';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/index/index.module#IndexModule',
    pathMatch: 'full'
  },
  {
    path: 'area1',
    loadChildren: './views/area1/area1.module#Area1Module',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'area2',
    loadChildren: './views/area2/area2.module#Area2Module',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [AppCoreUIModule.forRoot(), AppCoreModule.forRoot(), CommonLibModule.forRoot(), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRootRoutingModule { }
