import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './+dashboard/dashboard.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path: '', pathMatch: 'full', component: HomeComponent,
  //   data: {
  //     title: 'Home',
  //     page: 'home'
  //   }
  // },
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  // {
  //   path: 'dashboard', loadChildren: () => import('./+dashboard/dashboard.module').then(m => m.DashboardModule),
  //   canActivate: [DashboardGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {
  //   initialNavigation: 'enabledNonBlocking'
  // })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
