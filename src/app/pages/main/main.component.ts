import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { VideoService, VideosResult } from 'src/service/video/video.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {  //카테고리 any 안 좋음.
  currentCategory = '전체';
  seeAll: string = '모두보기';
  videos: VideosResult; //에다가 카테고리 쪼개지 말고(static 고정 상수값) 다 넣기(동적으로)
  detail: string = 'detail/'
  isLoading: boolean = true;
  constructor(
    private videoService: VideoService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe({
        next: (res) => {
        },
        error: (e) => {
          console.log(e);
        },
      });
    this.getVideosThumbNail();
  }

  getVideosThumbNail() {
    this.videoService.getVideos().subscribe({
      next: (res) => {
        this.videos = res
        this.isLoading = false;
      },
      error: (e) => {
        console.log(e)
      }
    });
  }

}
