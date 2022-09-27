import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CategoryComponent } from './category/category.component';
import { VideosComponent } from './videos/videos.component';
import { CommentComponent } from './comment/comment.component';

const components = [
  ButtonComponent,
  CategoryComponent,
  VideosComponent,
  CommentComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class ComponentsModule {}
