import { TagsComponent } from './tags/tags.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


const componetns = [TagsComponent]

@NgModule({
  declarations: componetns,
  imports: [
    CommonModule,
  ],
  exports: componetns
})
export class ComponentsModule { }
