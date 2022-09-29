import { Component, Input, OnInit } from '@angular/core';
import { CreateVideoDTO } from 'src/service/video/dto/create-video.dto';
import { VideoService } from 'src/service/video/video.service';

export type Videos = {
  title?: string;
  icon: string;
  videoTitle: string;
  category: string;
};


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @Input() title: string;
  // @Input() icon: string;
  // @Input() videoTitle: string;
  @Input() category: string;
  @Input() seeAll: string;
  @Input() link: string;
  @Input() videos: CreateVideoDTO[];
  youtube: string = 'https://www.youtube.com/embed/'
  htmlVideo: any;
  javascriptVideo: any;
  reactVideo: any;
  tailwindcssVideo: any;
  angularVideo: any;
  detail: string = 'detail/'
  isLoading: boolean = false;
  youtubeLink: string = 'https://www.youtube.com/embed/';
  videoss: Videos[] = [
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      category: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      category: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      category: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      category: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      category: '필라테스',
    },
    {
      icon: 'assets/icons/img1.svg',
      videoTitle: '9월 18일 야외 필라테스',
      category: '필라테스',
    },
  ];
  constructor(
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
  }

  getVideosByCategory(query: string) {
    this.videoService.getVideosByCategory(query).subscribe({
      next: (res) => {
        
        if (query === 'Angular') {
          this.isLoading = true;
          this.angularVideo = res
          console.log(res)
          // for (let video of this.angularVideo) {
          //   video.url = video.url.substring(17)
          //   video.url = this.youtube.concat(video.url);
          // }
        }
        if (query === 'HTML') {
          this.isLoading = true;
          this.htmlVideo = res
          console.log(res)
          // for (let video of this.htmlVideo) {
          //   video.url = video.url.substring(17)
          //   video.url = this.youtube.concat(video.url);
          // }
        }
        if (query === 'tailwindcss') {
          this.isLoading = true;
          this.tailwindcssVideo = res
          console.log(res)
          // for (let video of this.tailwindcssVideo) {
          //   video.url = video.url.substring(17)
          //   video.url = this.youtube.concat(video.url);
          // }
        }
        if (query === 'JavaScript') {
          this.isLoading = true;
          this.javascriptVideo = res
          console.log(res)
          // for (let video of this.javascriptVideo) {
          //   video.url = video.url.substring(17)
          //   video.url = this.youtube.concat(video.url);
          // }
        }
        if (query === 'React') {
          this.isLoading = true;
          this.reactVideo = res
          console.log(res)
          // for (let video of this.reactVideo) {
          //   video.url = video.url.substring(17)
          //   video.url = this.youtube.concat(video.url);
          // }
        }
      },
      error: (e) => {
        console.log(e)
      }
    });
    console.log(this.isLoading)
  }

    
}
