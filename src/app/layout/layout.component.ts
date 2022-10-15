import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import { filter } from 'rxjs';
import { ICreateVideoDTO } from 'src/service/video/dto/create-video.dto';
import { VideoService } from 'src/service/video/video.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  maintitle = 'Youtube Scraper';
  currentCategory = '전체';
  @Output() category = new EventEmitter<string>();
  detailCategory: string;
  Category: string = '';
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe({
        next: (res: RouterEvent) => {
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
