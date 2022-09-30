import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoryVideosComponent } from './view-category-videos.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCategoryVideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCategoryVideosRoutingModule { }
