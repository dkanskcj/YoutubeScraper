import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardGuard } from './dashboard.guard';

import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: IndexComponent }
        ],
        canActivate: [DashboardGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
