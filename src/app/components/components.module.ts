import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CategoryComponent } from './category/category.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentComponent } from './comment/comment.component';


const components = [CategoryComponent, InputComponent, ButtonComponent, CommentComponent]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
  ],
  exports: components
})
export class ComponentsModule { }
