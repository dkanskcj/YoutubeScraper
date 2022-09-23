import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentpageComponent } from './commentpage.component';

const routes: Routes = [
  {
    path: '',
    component: CommentpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentpageRoutingModule { }
