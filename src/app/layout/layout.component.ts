import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CreateVideoDTO } from 'src/service/video/dto/create-video.dto';
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
  Category: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        // this.currentCategory = this.route.snapshot.params['category']
        console.log('layout this.currentCategory => ',this.currentCategory)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
