import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { PipeModule } from '../pipe/pipe.module';
import { WholepageRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ComponentsModule, WholepageRoutingModule, PipeModule],
})
export class WholepageModule {}
