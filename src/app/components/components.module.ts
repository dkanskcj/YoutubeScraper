import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CategoryComponent } from './category/category.component';
import { VideosComponent } from './videos/videos.component';

const components = [ButtonComponent, CategoryComponent, VideosComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class ComponentsModule {}
