import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { InputsComponent } from './inputs/inputs.component';
import { ButtonsComponent } from './buttons/buttons.component';

const components = [ InputsComponent, ButtonsComponent ]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class ComponentsModule { }
=======
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
>>>>>>> 932c1e7602da23a951fc342c8c790ab73dd4eb19
