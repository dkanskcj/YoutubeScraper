import { VideoService } from '../../service/video/video.service';
import { HttpClient } from '@angular/common/http';
import { CommentService } from '../../service/comment/comment.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { pipe, filter } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { FormControl, FormGroup } from '@angular/forms';

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

  comments: commentList[] = [];
  commentsTest: any;
  constructor(
    private commentService: CommentService,
    private VideoService: VideoService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.getComments();
        },
        error: (e) => {
          console.log(e);
        },
      });
    this.getComments();
  }

  getComments() {
    this.http.get(`${this.baseUrl}`).subscribe({
      next: (res) => {
        this.commentsTest = res;
        console.log(res);
        this.getVideos();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // videoId를 받는다.
  getCommentsWithVideoId(id: number) {
    console.log(id);
    this.http.get(`${this.baseUrl}/search/${id}`).subscribe({
      next: (res) => {
        console.log('videoId에 해당하는 댓글들은 이것입니다~~', res);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  getVideos() {
    this.http.get('http://localhost/video').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submit() {
    const body = this.createForm.getRawValue();
    if (!body) {
      console.log('존재하지가 않아~~');
    }
    console.log(body);
    this.commentService.createComment(body).subscribe({
      next: (res) => {
        console.log(res, '아이디와 비밀번호, 댓글 생성 완료');
        this.router.navigateByUrl('/detail');
        this.getComments();
        this.refresh();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  refresh(): void {
    window.location.reload();
  }
}
