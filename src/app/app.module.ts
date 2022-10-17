import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainpageModule } from './pages/main/main.module';
import { ViewCategoryVideosComponent } from './pages/view-category-videos/view-category-videos.component';
import { ViewCategoryVideosModule } from './pages/view-category-videos/view-category-videos.module';
@NgModule({
  declarations: [AppComponent, ViewCategoryVideosComponent, LoginPageComponent],
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
    MainpageModule,
    NgxsModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: 'auth'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
