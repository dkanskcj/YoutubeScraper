import { appRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
