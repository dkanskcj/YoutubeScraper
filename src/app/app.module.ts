import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommentpageModule } from './pages/commentpage/commentpage.module';
import { WholepageModule } from './wholepage/wholepage.module';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    CommentpageModule,
    FormsModule,
    ReactiveFormsModule,
    WholepageModule,
    NgxsModule.forRoot([AuthState])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
