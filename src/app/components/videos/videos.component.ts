import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CreateVideoDTO } from 'src/service/video/dto/create-video.dto';
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
  @Input() videos: CreateVideoDTO[];
  htmlVideo: any;
  javascriptVideo: any;
  reactVideo: any;
  tailwindcssVideo: any;
  angularVideo: any;
  detail: string = '/detail/'
  isLoading: boolean = false;
  @Input() currentUrl: string;
  
  constructor(
    private videoService: VideoService,
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
  }

  navigateDetail(video:CreateVideoDTO){
    this.router.navigateByUrl(`/detail/${video.id}?title=${video.category}`);
  }

  getVideosByCategory(query: string) {
    this.videoService.getVideosByCategory(query).subscribe({
      next: (res) => {

        if (query === 'Angular') {
          this.isLoading = true;
          this.angularVideo = res
        }
        if (query === 'HTML') {
          this.isLoading = true;
          this.htmlVideo = res
        }
        if (query === 'tailwindcss') {
          this.isLoading = true;
          this.tailwindcssVideo = res
        }
        if (query === 'JavaScript') {
          this.isLoading = true;
          this.javascriptVideo = res
        }
        if (query === 'React') {
          this.isLoading = true;
          this.reactVideo = res
        }
      },
      error: (e) => {
        console.log(e)
      }
    });
  }

  haveSeeAll() {
    if (!this.seeAll) {
      return 'pt-[5px] flex flex-wrap gap-6 items-start'
    }
    return 'scrollBar flex gap-6 items-start'
  }

}
