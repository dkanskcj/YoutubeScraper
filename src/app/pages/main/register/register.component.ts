import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { VideoService } from 'src/service/video/video.service';
import { ICreateVideoDTO } from 'src/service/video/dto/create-video.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Category: string = 'HTML';
  buttonName: string = '등록';
  video: ICreateVideoDTO;
  videoId: number = 0;
  showCategory: boolean = false;
  update: boolean = false;
  createForm = new FormGroup({
    title: new FormControl(null),
    url: new FormControl(null),
    category: new FormControl(null)
  })

  constructor(
    private videoService: VideoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Category;
    this.videoId = this.route.snapshot.params['id']
    if (this.videoId) {
      this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe({
        next: (res) => {
          this.getVideo()
        },
        error: (err) => {
          console.log(err)
        }
      });
      this.buttonName = '등록'
      this.getVideo()
    }
  }


  changeCategory(Category: string) {
    this.Category = Category;
    this.showCategory = false;
  }

  submit() {
    const body = this.createForm.getRawValue();
    if (this.update === false) {
      body.category = this.Category;
      console.log(body)
      this.videoService.createVideo(body).subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigateByUrl('/')
          window.location.reload();
        },
        error: (e) => {
          console.log(e)
        }
      });
    }
    else if (this.update === true) {
      this.videoService.updateVideo(body, this.videoId).subscribe({
        next: (res) => {
          this.update = false;
          this.router.navigateByUrl(`/detail/${this.videoId}?title=${this.video.category}`)
        },
        error: (err) => {
          console.log(err)
        }
      });
    }
  }

  isClicked(event, showCategory: string) {
    if (showCategory === 'in') {
      this.showCategory = true
      event.stopPropagation();
    }
    if (showCategory === 'out') {
      this.showCategory = false
      event.stopPropagation();
    }
  }


  navigateByUrl() {
    return this.router.navigateByUrl(`/detail/${this.videoId}?title=${this.video.category}`)
  }

  getVideo() {
    this.videoService.getVideo(this.videoId).subscribe({
      next: (res: ICreateVideoDTO) => {
        this.video = res;
        this.buttonName = '수정'
        this.update = true;
        this.createForm.setValue({
          category: res.category,
          title: res.title,
          url: res.url
        })
        this.createForm.controls.url.disable();
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  urlInputClass(){
    if(this.buttonName === '수정'){
      this.createForm.controls.url.disable();
      return 'w-full px-3 py-2.5 flex justify-between border bg-white border-gray-200 rounded-md outline-none focus-within:ring-gray-400 transition-colors focus-within:ring-1 select-none'
    }
    else{
      return 'w-full px-3 py-2.5 flex justify-between border bg-white border-gray-200 rounded-md outline-none focus-within:ring-gray-400 transition-colors focus-within:ring-1 cursor-pointer'
    }
  }
  // urlInputClass(){
  //   if(this.videoId === 0){
  //     return "w-full px-3 py-2.5 flex justify-between border bg-white border-gray-200 rounded-md outline-none focus-within:ring-gray-400 transition-colors focus-within:ring-1 cursor-pointer select-none"
  //   }
  //   else if(this.videoId !== 0){
  //     return "w-full px-3 py-2.5 flex justify-between border bg-white border-gray-200 rounded-md outline-none focus-within:ring-gray-400 transition-colors focus-within:ring-1 cursor-pointer"
  //   }
  // }

}
