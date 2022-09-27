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
        path: 'category',
        loadChildren: () =>
          import('../categorypage/categorypage.module').then(
            (m) => m.CategorypageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
