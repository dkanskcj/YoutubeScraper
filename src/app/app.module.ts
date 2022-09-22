import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
