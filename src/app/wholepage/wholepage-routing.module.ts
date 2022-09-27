import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholepageComponent } from './wholepage.component';

const routes: Routes = [
  {
    path: '',
    component: WholepageComponent,
  },
  // {
  //   path: ':id',
  //   loadChildren: () =>
  //     import('../pages/detail/detail.module').then(m => m.DetailModule),
  // },
  // {
  //   path: 'register',
  //   loadChildren: () =>
  //     import('../pages/register/register.module').then(m => m.RegisterModule),
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WholepageRoutingModule {}
