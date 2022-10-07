import { OrderByPipe } from './orderBy/orderBy.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safePipe/safe.pipe';

const pipes = [SafePipe, OrderByPipe];

@NgModule({
  declarations: pipes,
  imports: [CommonModule],
  exports: pipes,
})
export class PipeModule {}
