import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/service/comment/comment.service';
import { GetCommentDTO } from 'src/service/comment/dto/get-comment.dto';
import { ICreateVideoDTO } from 'src/service/video/dto/create-video.dto';
import { VideoService } from 'src/service/video/video.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})

export class DetailComponent implements OnInit {
  @Output() detailCategory: string;

  currentCategory = '전체';

  private baseUrl: string = 'http://localhost:80/comment';

  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null),
    content: new FormControl(null),
  });
  comment: GetCommentDTO;
  video: any;
  videoId: number = 0;
  youtubeLink: string = 'https://www.youtube.com/embed/'
  comments: GetCommentDTO[] = [];
  commentsTest: any;
  isLoading: boolean = true;
  buttonName: string = '등록'
  isButtonsHide: boolean = true;
  currentIndex: number;
  constructor(
    private commentService: CommentService,
    private videoService: VideoService,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.videoId = this.route.snapshot.params['id']
    if (this.videoId) {
      this.getVideo(this.videoId)
      this.getCommentsWithVideoId(this.videoId)
      this.isLoading = false;
    }
    this.isLoading = false;
  }

  toggle(): void {
    this.createForm.get('content').disable();
  }

  // videoId를 받는다.
  getCommentsWithVideoId(id: number) {
    // console.log('getCommentsWithVideoID -> ', id);
    this.commentService.getComments(id).subscribe({
      next: (res: GetCommentDTO[]) => {
        this.comments = res;
        console.log(res)
        // console.log('videoId에 해당하는 댓글들은 이것입니다~~', res);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  getVideo(id: number) {
    this.videoService.getVideo(id).subscribe({
      next: (res: ICreateVideoDTO) => {
        this.video = res;
        console.log(res);
        this.video.url = this.video.url.substring(17);
        this.video.url = this.youtubeLink.concat(this.video.url)
        this.sendCategory(this.video.category);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submit() {
    const body = this.createForm.getRawValue();
    if (this.buttonName === '등록') {
      if (!body.content) {   //if 하고 ! 예외 처리할 때는 return 써서 끝내줘야 된다. !body.content === !''
        return console.log('입력 값이 없습니다.');
      }
      // console.log(body, 'this.videoId -> ', this.videoId);
      this.commentService.createComment(body, this.videoId).subscribe({
        next: (res: GetCommentDTO) => {
          console.log(res, '아이디와 비밀번호, 댓글 생성 완료');
          this.comments.push(res)
          this.createForm.setValue({
            content: '',
            name: '',
            password: ''
          })
          this.getCommentsWithVideoId(this.videoId);
          // this.router.navigateByUrl('/');
          document.documentElement.scrollTop = 0;
          // this.refresh();
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
    if (this.buttonName === '수정') {
      // const body = this.createForm.getRawValue();
      if (!body.password) {
        return console.log('비밀번호를 입력해 주시기 바랍니다.')
      }
      this.commentService.updateComment(body, this.comment.id).subscribe({
        next: (res: GetCommentDTO) => {
          this.getCommentsWithVideoId(this.videoId)
          this.buttonName = '등록'
          this.createForm.setValue({
            content: '',
            name: '',
            password: ''
          })
          document.documentElement.scrollTop = 0;
        },
        error: (err) => {
          console.log(err)
        }
      });
    }
  }

  sendCategory($event) {
    this.detailCategory = $event;
    console.log(this.detailCategory)
  }

  modifyComment(index: number) {
    this.comment = this.comments[index];
    this.createForm.setValue({
      name: this.comment.name,
      content: this.comment.content,
      password: ''
    })
    document.documentElement.scrollTop = 0;
    this.buttonName = '수정'
  }

  deleteComment(index: number) {
    // this.createForm.controls.content.disable();
    this.buttonName = '등록'
    this.createForm.setValue({
      content: '',
      name: '',
      password: ''
    })
    this.comment = this.comments[index];
    const password = window.prompt('이 댓글을 삭제하시려면 비밀번호를 입력해 주세요.')
    console.log(password);
    const body = {
      name: this.comment.name,
      password: password
    }
    if (!password) {
      document.documentElement.scrollTop = 0;
      return alert('비밀번호를 입력해 주시기 바랍니다.')
    }
    // console.log(body.password)
    this.commentService.deleteComment(body, this.comment.id).subscribe({
      next: (res) => {
        this.getCommentsWithVideoId(this.videoId)
        document.documentElement.scrollTop = 0;
        // console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    });

  }


}
