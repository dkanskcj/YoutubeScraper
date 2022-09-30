import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './../../components/components.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { SafePipeModule } from 'src/app/wholepage/safePipe/safePipe.module';
@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    SafePipeModule
  ],
})
export class DetailModule {}
