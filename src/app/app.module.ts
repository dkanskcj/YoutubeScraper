import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LayoutComponent } from './testlayout/layout.component';
import { CommentpageComponent } from './pages/commentpage/commentpage.component';
import { UserlistComponent } from './pages/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UserlistComponent,
    CommentpageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
