import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, DetailRoutingModule, ComponentsModule],
})
export class DetailModule {}
