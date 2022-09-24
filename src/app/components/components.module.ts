import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TagComponent } from './tag/tag.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentComponent } from './comment/comment.component';


const componetns = [TagComponent, InputComponent, ButtonComponent, CommentComponent]

@NgModule({
  declarations: componetns,
  imports: [
    CommonModule,
  ],
  exports: componetns
})
export class ComponentsModule { }
