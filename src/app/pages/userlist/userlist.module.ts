import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserlistModule { }
