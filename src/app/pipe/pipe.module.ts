import { OrderByPipe } from './orderBy/orderBy.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safePipe/safe.pipe';
import { TimeAgoPipe } from './day-ago-pipe/day-ago-pipe'

const pipes = [ SafePipe, TimeAgoPipe ];

@NgModule({
  declarations: pipes,
  imports: [
    CommonModule
  ],
  exports: pipes
})
export class PipeModule {}
