import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ViewCategoryVideosComponent } from './pages/view-category-videos/view-category-videos.component';
import { ViewCategoryVideosModule } from './pages/view-category-videos/view-category-videos.module';
import { WholepageModule } from './wholepage/wholepage.module';
@NgModule({
  declarations: [AppComponent, ViewCategoryVideosComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ViewCategoryVideosModule,
    WholepageModule,
    NgxsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
