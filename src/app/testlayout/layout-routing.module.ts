import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'userlist',
    loadChildren: () => import('../pages/userlist/userlist.module').then(m=>m.UserlistModule)
  },
  {
    path: 'commentPage',
    loadChildren: () => import('../pages/commentpage/commentpage.module').then(m=>m.CommentpageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
