import { Component, OnInit } from '@angular/core';
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
  videos: CreateVideoDTO[] = [];

  constructor(
    private videoService: VideoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((ev)=> ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.getVideos()
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.getVideos();
  }



  getVideos(){
    this.videoService.getVideos().subscribe({
      next: (res) => {
        this.videos = res;
        console.log(this.videos)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }


}
