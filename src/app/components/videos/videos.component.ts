import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ICreateVideoDTO } from 'src/service/video/dto/create-video.dto';
import { IGetVideosDTO } from 'src/service/video/dto/get-videos.dto';
import { VideoService } from 'src/service/video/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @Input() title: string;
  @Input() category: string;
  @Input() seeAll: boolean = true;
  @Input() link: string;
  @Input() videos: IGetVideosDTO[] = [];
  isLoading: boolean = false;
  @Input() currentUrl: string;
  thumbNail: string = 'https://img.youtube.com/vi/';
  defaultImg: string = '/mqdefault.jpg';
  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.currentUrl = res['url'].substring(8);
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.getThumbNailVideos();
  }

  navigateDetail(video:ICreateVideoDTO){
    this.router.navigateByUrl(`/detail/${video.id}?title=${video.category}`);
  }

  getThumbNailVideos(){
    if(!this.videos){
      return ;
      // return console.log('등록된 영상이 없습니다.')
    }
    for (let video of this.videos) {
      video.url = video.url.substring(30)
      video.url = this.thumbNail.concat(video.url + this.defaultImg)
    }
  }

  haveSeeAll() {
    if (!this.seeAll) {
      return 'flex flex-wrap gap-6 items-start'
    }
    return 'scrollBar h-fit flex gap-6 items-start'
  }

}
