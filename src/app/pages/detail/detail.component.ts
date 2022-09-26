import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/service/video/video.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  videoId: number;
  video: any;
  constructor(
    private http: HttpClient,
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.videoId = this.route.snapshot.params['id'];
    if (this.videoId) {
      this.getVideo(this.videoId);
    }
  }

  getVideo(id: number) {
    this.http.get(`http://localhost/video/${id}`).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.log(e);
      },
    });
    // this.videoService.getVideo(id).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   },
    // });
  }

  getComment(id: number) {}
}
