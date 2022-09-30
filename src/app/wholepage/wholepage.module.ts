import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { PipeModule } from '../pipe/pipe.module';
import { WholepageRoutingModule } from './wholepage-routing.module';
import { WholepageComponent } from './wholepage.component';

@NgModule({
  declarations: [WholepageComponent],
  imports: [CommonModule, ComponentsModule, WholepageRoutingModule, PipeModule],
})
export class WholepageModule {}
