import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorypageRoutingModule } from './categorypage-routing.module';
import { ComponentsModule } from '../components/components.module';
import { CategorypageComponent } from './categorypage.component';

@NgModule({
  declarations: [CategorypageComponent],
  imports: [CommonModule, CategorypageRoutingModule, ComponentsModule],
})
export class CategorypageModule {}
