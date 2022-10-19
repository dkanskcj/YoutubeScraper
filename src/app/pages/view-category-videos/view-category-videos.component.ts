import { AfterViewInit, Component, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, pipe } from 'rxjs';
import { IGetVideosDTO } from 'src/service/video/dto/get-videos.dto';
import { VideoService, VideosResult } from 'src/service/video/video.service';

@Component({
  selector: 'app-view-category-videos',
  templateUrl: './view-category-videos.component.html',
  styleUrls: ['./view-category-videos.component.scss']
})
export class ViewCategoryVideosComponent implements OnInit {
  videos: IGetVideosDTO[];
  category: string;
  isLoading: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.params['category'];
    // console.log('this.category => ', this.category)
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.category = this.route.snapshot.params['category'];
        this.getVideosByCategory(this.category)
        // if(this.category === this.route.snapshot.params['category']){
          // console.log(this.category)
        // }
      },
      error: (e) => {
        console.log(e)
      }
    });
    this.getVideosByCategory(this.category)
  }



  getVideosByCategory(query: string) {
    this.videoService.getVideosThumbNail(query).subscribe({
      next: (res: IGetVideosDTO[]) => {
        this.videos = res;
        if(res){
          this.isLoading = false
        }
      },
      error: (e) => {
        console.log(e)
      }
    });
    this.isLoading = true;
  }
  // @HostListener("window:scroll", [])
  // refresh(): void {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     // this.emitted = true;
  //     // this.scrollingFinished.emit();
  //     location.reload()
  //   }else{
  //     // location.reload()
  //   }
  // }
}
