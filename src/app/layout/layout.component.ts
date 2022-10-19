import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { filter, Observable, tap } from 'rxjs';
import { AuthFacade } from 'src/auth/state/auth.facade';
import { AuthState, AuthModel } from 'src/auth/state/auth.state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Select(AuthState) user$: Observable<AuthModel>;
  maintitle = 'Youtube Scraper';
  currentCategory: string = '';
  detailCategory: string;
  Category: string = '';
  isLoggedIn$: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authFacade: AuthFacade
  ) {
    this.router.events.subscribe({
      next: (res) => {
        if (res instanceof NavigationEnd) {
          console.log(res['url'], 'asfhasnfkas')
          if (res['url'].indexOf('/main') === 0 && res['url'].length === 5) {
            this.currentCategory = '전체';
          }
          else if (res['url'].indexOf('/') === 0 && res['url'].length == 1) {
            this.currentCategory = '';
          }
          else if (res['url'].indexOf('/video') === 0) {
            this.currentCategory = res['url'].substring(8);
          }
          else if (res['url'].indexOf('/detail') === 0) {
            this.currentCategory = res['url'].substring(17);
          }
        }
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((ev) => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.user$.subscribe({
          next: (res) => {
            this.isLoggedIn$ = res.isLoggedIn;
            console.log(res)
          },
          error: (err) => {
            console.log(err)
          }
        })
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.user$.subscribe({
      next: (res) => {
        this.isLoggedIn$ = res.isLoggedIn;
        // console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
