import { PipeModule } from './../../pipe/pipe.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './../../components/components.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
@NgModule({
  declarations: [DetailComponent, DeleteCommentComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule
  ],
})
export class DetailModule {}
