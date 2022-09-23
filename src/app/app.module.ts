import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { CategorypageComponent } from './categorypage/categorypage.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutRoutingModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
