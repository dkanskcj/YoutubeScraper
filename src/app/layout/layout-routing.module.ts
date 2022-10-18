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
        loadChildren: () => import('../pages/login-page/login-page.module').then(m=>m.LoginPageModule),
      },
      {
        path: 'main',
        loadChildren: () => import('../pages/main/main.module').then(m=>m.MainpageModule)
      },
      {
        path: 'detail',
        loadChildren: () =>
          import('../pages/main/detail/detail.module').then(m=>m.DetailModule),
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('../pages/main/detail/detail.module').then(m => m.DetailModule)
      },
      {
        path: 'videos/:category',
        loadChildren: () => import('../pages/view-category-videos/view-category-videos.module').then(m => m.ViewCategoryVideosModule)
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../pages/main/register/register.module').then(
            (m) => m.RegisterModule
          ),
        // redirectTo: ''
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
