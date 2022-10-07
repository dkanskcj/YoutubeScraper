import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  Category: string = 'HTML';
  showCategory: boolean = false;
  currentCategory = '전체';

  comment: GetCommentDTO;
  video: ICreateVideoDTO;
  videoId: number = 0;
  youtubeLink: string = 'https://www.youtube.com/embed/'
  comments: GetCommentDTO[] = [];
  isLoading: boolean = true;
  buttonName: string = '등록'
  isButtonsHide: boolean = true;
  currentIndex: number;
  title: string;
  category: string;
  updating: boolean = false;
  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null),
    content: new FormControl(null),
  });

  constructor(
    private commentService: CommentService,
    private videoService: VideoService,
    private router: Router,
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

  changeCategory(Category: string) {
    this.Category = Category;
    this.showCategory = false;
  }
  // videoId를 받는다.
  getCommentsWithVideoId(id: number) {
    this.commentService.getComments(id).subscribe({
      next: (res: GetCommentDTO[]) => {
        this.comments = res;
        console.log(res)
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
          document.documentElement.scrollIntoView({ behavior: 'smooth' });
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
    if (this.buttonName === '수정') {
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
          document.documentElement.scrollIntoView({ behavior: 'smooth' });
        },
        error: (err) => {
          window.alert('비밀번호가 올바르지 않습니다.')
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
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
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
      document.documentElement.scrollIntoView({ behavior: 'smooth' });
      return alert('비밀번호를 입력해 주시기 바랍니다.')
    }
    this.commentService.deleteComment(body, this.comment.id).subscribe({
      next: (res) => {
        this.getCommentsWithVideoId(this.videoId)
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
        window.alert('삭제가 완료되었습니다.');
      },
      error: (err) => {
        window.alert('비밀번호가 올바르지 않습니다.')
        console.log(err)
      }
    });
  }

  updateVideo() {
    this.updating = true;
    // this.updateVideoFrom.setValue({
    //   category: this.video.category,
    //   title: this.video.title
    // })
  }

  deleteVideo() {
    const checkDelete = window.confirm('정말로 삭제하시겠습니까? 영상에 달린 댓글들도 모두 삭제됩니다.')
    if (!checkDelete) {
      return window.alert('사용자가 요청을 거부하였습니다.')
    }
    this.videoService.deleteVideo(this.videoId).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/');
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }


}
