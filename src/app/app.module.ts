import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { CommentpageModule } from './pages/commentpage/commentpage.module';
import { WholepageModule } from './wholepage/wholepage.module';

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
    AuthModule
    // NgxsModule.forRoot([AuthState])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
