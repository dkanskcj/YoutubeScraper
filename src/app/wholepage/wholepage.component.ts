import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CreateVideoDTO } from 'src/service/video/dto/create-video.dto';
import { VideoService } from 'src/service/video/video.service';

@Component({
  selector: 'app-wholepage',
  templateUrl: './wholepage.component.html',
  styleUrls: ['./wholepage.component.scss'],
})
export class WholepageComponent implements OnInit {  //카테고리 any 안 좋음.
  currentCategory = '전체';
  seeAll: string = '모두보기';
  videos: any; //에다가 카테고리 쪼개지 말고(static 고정 상수값) 다 넣기(동적으로)
  detail: string = 'detail/'
  youtube: string = 'https://www.youtube.com/embed/'
  htmlVideo: any;
  javascriptVideo: any;
  reactVideo: any;
  tailwindcssVideo: any;
  angularVideo: any;
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
    this.getVideos();
  }

  getVideos() { //통신 5번...
    this.getVideosThumbNail('HTML');
    this.getVideosThumbNail('React');
    this.getVideosThumbNail('JavaScript');
    this.getVideosThumbNail('tailwindcss');
    this.getVideosThumbNail('Angular');
  }

  getVideosThumbNail(query: string) {  //쿼리 쪼개지 말기
    this.videoService.getVideosThumbNail(query).subscribe({
      next: (res) => {

        if (query === 'Angular') {
          this.angularVideo = res
        }
        if (query === 'HTML') {
          this.htmlVideo = res
        }
        if (query === 'tailwindcss') {
          this.tailwindcssVideo = res
        }
        if (query === 'JavaScript') {
          this.javascriptVideo = res
        }
        if (query === 'React') {
          this.reactVideo = res
        }
        this.isLoading = false;

      },
      error: (e) => {
        console.log(e)
      }
    });
  }

}
