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
  detail: string = 'detail/'
  youtube: string = 'https://www.youtube.com/embed/'
  htmlVideo: any;
  javascriptVideo: any;
  reactVideo: any;
  tailwindcssVideo: any;
  angularVideo: any;
  isLoading: boolean = false;
  constructor(
    private videoService: VideoService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe({
        next: (res) => {
          // this.getVideos();
        },
        error: (e) => {
          console.log(e);
        },
      });

    this.getVideos();

    // this.getVideosByCategory('HTML');
    // this.getVideosByCategory('React');
    // this.getVideosByCategory('JavaScript');
    // this.getVideosByCategory('tailwindcss');
    // this.getVideosByCategory('Angular');
  }

  getVideos() {
    this.isLoading = true;
    this.getVideosByCategory('HTML');
    this.getVideosByCategory('React');
    this.getVideosByCategory('JavaScript');
    this.getVideosByCategory('tailwindcss');
    this.getVideosByCategory('Angular');
    this.isLoading = false;
    console.log(this.isLoading)
  }
  getVideosByCategory(query: string) {
    this.videoService.getVideosByCategory(query).subscribe({
      next: (res) => {

        if (query === 'Angular') {
          this.angularVideo = res
          console.log(res)
        }
        if (query === 'HTML') {
          this.htmlVideo = res
          console.log(res)
        }
        if (query === 'tailwindcss') {
          this.tailwindcssVideo = res
          console.log(res)
        }
        if (query === 'JavaScript') {
          this.javascriptVideo = res
          console.log(res)
        }
        if (query === 'React') {
          this.reactVideo = res
          console.log(res)
        }
      },
      error: (e) => {
        console.log(e)
      }
    });
    console.log(this.isLoading)
  }

  navigateDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
