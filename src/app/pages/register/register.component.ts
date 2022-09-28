import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/service/video/video.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Category: string = 'HTML';
  
  showCategory: boolean = false;

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
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.log(e);
        },
      });
  }
  

  changeCategory(Category: string) {
    this.Category = Category;
    this.showCategory = false;
  }

  submit() {
    const body = this.createForm.getRawValue();
    body.category = this.Category;
    console.log(body)
    this.videoService.createVideo(body).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigateByUrl('/')
        
      },
      error: (e) => {
        console.log(e)
      }
    });
  }




}
