import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { SafePipe } from './safePipe/safePipe.component';
import { WholepageRoutingModule } from './wholepage-routing.module';
import { WholepageComponent } from './wholepage.component';

@NgModule({
  declarations: [WholepageComponent, SafePipe],
  imports: [CommonModule, ComponentsModule, WholepageRoutingModule],
})
export class WholepageModule {}
