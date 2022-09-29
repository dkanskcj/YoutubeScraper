import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { CommentService } from 'src/service/comment/comment.service';
import { VideoService } from 'src/service/video/video.service';

type commentList = {
  name: string;
  content: string;
  password: string;
};

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  currentCategory = '전체';

  private baseUrl: string = 'http://localhost:80/comment';

  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null),
    content: new FormControl(null),
  });
  videoId: number = 0;
  comments: commentList[] = [];
  commentsTest: any;
  constructor(
    private commentService: CommentService,
    private videoService: VideoService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.videoId = this.route.snapshot.params['id']
    if(this.videoId){
      this.getVideo(this.videoId)
      this.getCommentsWithVideoId(this.videoId)
    }
  }

  getComment(id: number) {
    this.http.get(`${this.baseUrl}/${id}`).subscribe({
      next: (res) => {
        console.log(res);
        this.commentsTest = res;
        this.getVideo(this.videoId);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // videoId를 받는다.
  getCommentsWithVideoId(id: number) {
    console.log('getCommentsWithVideoID -> ',id);
    this.http.get(`${this.baseUrl}/search/${id}`).subscribe({
      next: (res) => {
        this.commentsTest = res;
        console.log('videoId에 해당하는 댓글들은 이것입니다~~', res);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }


  getVideo(id: number){
    this.videoService.getVideo(id).subscribe({
      next:(res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }


  submit() {
    const body = this.createForm.getRawValue();
    if (!body) {
      console.log('입력 값이 없습니다.');
    }
    console.log(body, 'this.videoId -> ', this.videoId);
    this.commentService.createComment(body, this.videoId).subscribe({
      next: (res) => {
        console.log(res, '아이디와 비밀번호, 댓글 생성 완료');
        // this.router.navigateByUrl('/');
        this.refresh();
      },
      error: (e) => {
        console.log(body, this.videoId)
        console.log(e);
      },
    });
  }

  refresh(): void {
    window.location.reload();
  }
}
