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
  }

  navigateDetail(video:ICreateVideoDTO){
    this.router.navigateByUrl(`/detail/${video.id}?title=${video.category}`);
  }


  haveSeeAll() {
    if (!this.seeAll) {
      return 'flex flex-wrap gap-6 items-start'
    }
    return 'scrollBar flex gap-6 items-start'
  }

}
