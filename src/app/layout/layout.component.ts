import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { AuthFacade } from 'src/auth/state/auth.facade';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isLoggedIn$ = this.authFacade.isLoggedIn$.pipe(tap(isLoggedIn => console.log('isLoggedIn', isLoggedIn)))
  maintitle = 'Youtube Scraper';
  currentCategory = '전체';
  detailCategory: string;
  Category: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe({
        next: (res) => {
          console.log(res)
          this.detailCategory = this.route.snapshot.queryParams['title'];
          if (this.currentCategory) {
            this.currentCategory = res['url'].substring(8);
          }
          if (this.currentCategory && this.detailCategory) {
            this.currentCategory = this.detailCategory;
          }
          if (!this.currentCategory) {
            this.currentCategory = '전체';
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
