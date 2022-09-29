import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './safePipe/safePipe.component';
@NgModule({
  declarations: [DetailComponent, SafePipe],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DetailModule {}
