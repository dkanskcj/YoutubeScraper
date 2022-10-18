import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AuthFacade } from './state/auth.facade';
import { AuthState } from './state/auth.state';
import { LoggedInGuard } from './state/logged-in.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthState])
  ],
  providers: [
    AuthFacade,
    LoggedInGuard,
  ]
})
export class AuthModule { }
