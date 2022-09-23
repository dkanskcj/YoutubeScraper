import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholepageComponent } from './wholepage.component';

const routes: Routes = [
  {
    path: '',
    component: WholepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WholepageRoutingModule {}
