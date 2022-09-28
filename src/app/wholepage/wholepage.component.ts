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
export class WholepageComponent implements OnInit {
  private baseUrl = 'http://localhost/video';
  currentCategory = '전체';
  seeAll: string = '모두보기';
  videos: any;
  youtube: string = 'https://www.youtube.com/embed/'
  constructor(
    private videoService: VideoService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe({
        next: (res) => {
          this.getVideos();
        },
        error: (e) => {
          console.log(e);
        },
      });
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos().subscribe({
      next: ((res: CreateVideoDTO[]) => {
        console.log(res)
        this.videos = res['items']
        for(let video of this.videos){
          video.url = video.url.substring(17)
          video.url = this.youtube.concat(video.url);
          console.log(video.url)
        }
      }),
      error: (err) => {
        console.log(err)
      }
    });
  }

  navigateDetail(id:number){
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
