import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';

@NgModule({
    declarations: [
        DashboardComponent,
        IndexComponent
    ],
    imports: [DashboardRoutingModule]
})
export class DashboardModule { }