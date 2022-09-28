import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../wholepage/wholepage.module').then(
            (m) => m.WholepageModule
          ),
      },
      {
        path: 'detail',
        loadChildren: () =>
          import('../pages/detail/detail.module').then((m) => m.DetailModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../pages/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'test',
        loadChildren: () =>
          import('../test/test.module').then((m) => m.TestModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
