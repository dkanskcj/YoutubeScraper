import { InputComponent } from './input/input.component';
import { TagComponent } from './tag/tag.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


const componetns = [TagComponent, InputComponent]

@NgModule({
  declarations: componetns,
  imports: [
    CommonModule,
  ],
  exports: componetns
})
export class ComponentsModule { }
