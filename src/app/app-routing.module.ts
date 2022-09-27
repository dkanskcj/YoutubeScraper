<<<<<<< HEAD
=======
import { AppComponent } from './app.component';
>>>>>>> 932c1e7602da23a951fc342c8c790ab73dd4eb19
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
    {
        path: '',
        loadChildren: () => import('./testlayout/layout.module').then(m=>m.LayoutModule)
    }
=======
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
>>>>>>> 932c1e7602da23a951fc342c8c790ab73dd4eb19
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
  exports: [RouterModule],
})
export class AppRoutingModule {}
>>>>>>> 932c1e7602da23a951fc342c8c790ab73dd4eb19
