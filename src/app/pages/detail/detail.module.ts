import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './../../components/components.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { SafePipeModule } from 'src/app/safePipe/safePipe.module';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
@NgModule({
  declarations: [DetailComponent, DeleteCommentComponent],
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
