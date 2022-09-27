import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholepageComponent } from './wholepage.component';

const routes: Routes = [
  {
    path: '',
    component: WholepageComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../pages/detail/detail.module').then((m) => m.DetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WholepageRoutingModule {}
