import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCategoryVideosRoutingModule } from './view-category-videos-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewCategoryVideosRoutingModule,
    ComponentsModule
  ]
})
export class ViewCategoryVideosModule { }
