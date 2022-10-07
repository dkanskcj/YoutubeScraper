import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { IGetVideosDTO } from 'src/service/video/dto/get-videos.dto';
import { VideoService } from 'src/service/video/video.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {  //카테고리 any 안 좋음.
  currentCategory = '전체';
  seeAll: string = '모두보기';
  videos: IGetVideosDTO[] = []; //에다가 카테고리 쪼개지 말고(static 고정 상수값) 다 넣기(동적으로)
  detail: string = 'detail/'
  thumbNail: string = 'https://img.youtube.com/vi/';
  defaultImg: string = '/mqdefault.jpg';
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
      next: (res: IGetVideosDTO[]) => {
        this.videos = res
        console.log(this.videos)
        for (let video of this.videos) {
          video.url = video.url.substring(30)
          video.url = this.thumbNail.concat(video.url + this.defaultImg)
          
        }
        this.isLoading = false;

      },
      error: (e) => {
        console.log(e)
      }
    });
  }

  filterCategoryVideos(category: string) {
    return this.videos.filter((item) => item.category === category);
  }
}
