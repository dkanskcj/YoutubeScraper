import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist.component';

const routes: Routes = [
  {
    path: '',
    component: UserlistComponent
  },
  // {
  //   path: 'commentPage',
  //   loadChildren: () => import('../commentpage/commentpage.module').then(m=>m.CommentpageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistRoutingModule { }
