import { Component, OnInit } from '@angular/core';
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
  currentCategory: string = '전체';
  detailCategory: string;
  Category: string = '';
  isLoggedIn$: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationStart))
      .subscribe({
        next: (res) => {
          // this.detailCategory = this.route.snapshot.queryParams['title'];
          if(res['url'].indexOf('/video') === 0){
            this.detailCategory = res['url'].substring(8)
          }
          else if(res['url'].indexOf('/detail') === 0){
            this.detailCategory = res['url'].substring(17);
          }
          this.user$.subscribe({
            next: (res) => {
              this.isLoggedIn$ = res.isLoggedIn;
              console.log(res)
            },
            error: (err) => {
              console.log(err)
            }
          })
          if (this.currentCategory) {
            this.currentCategory = res['url'].substring(8);
          }
          if (this.detailCategory) {
            this.currentCategory = this.detailCategory;
          }
          else if (!this.currentCategory) {
            this.currentCategory = '전체';
          }
          else {
            this.currentCategory = '';
          }
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
