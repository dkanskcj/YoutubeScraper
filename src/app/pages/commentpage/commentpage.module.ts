import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentpageRoutingModule } from './commentpage-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentpageComponent } from './commentpage.component';


@NgModule({
  declarations: [CommentpageComponent],
  imports: [
    CommonModule,
    CommentpageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CommentpageModule { }
