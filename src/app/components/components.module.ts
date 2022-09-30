import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CategoryComponent } from './category/category.component';
import { CommentComponent } from './comment/comment.component';
import { InputsComponent } from './inputs/inputs.component';
import { VideosComponent } from './videos/videos.component';

const components = [ InputsComponent, ButtonsComponent, CategoryComponent, VideosComponent, CommentComponent, ButtonComponent]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: components
})
export class ComponentsModule { }
