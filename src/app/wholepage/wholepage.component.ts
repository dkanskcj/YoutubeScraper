import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { VideoService } from '../service/video/video.service';

@Component({
  selector: 'app-wholepage',
  templateUrl: './wholepage.component.html',
  styleUrls: ['./wholepage.component.scss'],
})
export class WholepageComponent implements OnInit {
  private baseUrl = 'http://localhost/video';
  currentCategory = '전체';
  videos: any;

  viewMode = null;

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
      next: (res) => {
        console.log(res);
        this.videos = res;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  navigateDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
