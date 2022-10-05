import { PipeModule } from './../../pipe/pipe.module';
import { ComponentsModule } from './../../components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ComponentsModule, MainRoutingModule, PipeModule],
})
export class MainModule {}
