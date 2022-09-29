import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CategoryComponent } from './category/category.component';
import { VideosComponent } from './videos/videos.component';
import { CommentComponent } from './comment/comment.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { SafePipe } from './safePipe/safePipe.component';

const components = [ InputsComponent, ButtonsComponent, CategoryComponent, VideosComponent, CommentComponent, ButtonComponent, SafePipe]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: components
})
export class ComponentsModule { }
