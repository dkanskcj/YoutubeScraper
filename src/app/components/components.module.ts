import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CategoryComponent } from './category/category.component';
import { VideosComponent } from './videos/videos.component';
import { CommentComponent } from './comment/comment.component';
import { InputComponent } from './input/input.component';

const components = [
  ButtonComponent,
  CategoryComponent,
  VideosComponent,
  CommentComponent,
  InputComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class ComponentsModule {}
