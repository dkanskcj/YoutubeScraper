import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { AuthFacade } from 'src/auth/state/auth.facade';
import { AuthState, AuthModel } from 'src/auth/state/auth.state';
import { CommentService } from 'src/service/comment/comment.service';
import { GetCommentDTO } from 'src/service/comment/dto/get-comment.dto';
import { UserService } from 'src/service/user/user.service';
import { ICreateVideoDTO } from 'src/service/video/dto/create-video.dto';
import { IGetVideosDTO } from 'src/service/video/dto/get-videos.dto';
import { VideoService } from 'src/service/video/video.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})

export class DetailComponent implements OnInit {
  @Select(AuthState) user$: Observable<AuthModel>;

  @Output() detailCategory: string;
  userName$: string = '';
  userPassword$: string = '';
  isLoggedIn$: boolean = false;
  Category: string = 'HTML';
  showCategory: boolean = false;
  currentCategory = '전체';
  categoryWithVideos: ICreateVideoDTO[] = [];
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
  count: number = 0;
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
    private userService: UserService,
    private authFacade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.videoId = this.route.snapshot.params['id']
    if (this.videoId) {
      this.getVideo(this.videoId)
      this.getCommentsWithVideoId(this.videoId)
      this.isLoading = false;
      this.user$.subscribe(res => {
        this.isLoggedIn$ = res.isLoggedIn;
        if (this.isLoggedIn$ === false) {
          this.userName$ = null
          this.userPassword$ = null
        }
        else {
          this.userName$ = res.name;
          this.userPassword$ = res.password;
        }
      })
      console.log(this.userName$, 'ttt');
    }
    this.isLoading = false;
  }

  toggle(): void {
    this.createForm.get('content').disable();
  }

  navigateByUrl() {
    return this.router.navigateByUrl(`/register/video/${this.videoId}`);
  }

  isClicked(event, showCategory: string) {
    if (showCategory === 'in' && this.count === 1) {
      this.showCategory = false
      this.count = 0;
      event.stopPropagation();
    }
    else if (showCategory === 'in') {
      this.showCategory = true
      this.count++;
      event.stopPropagation();
    }
    else if (showCategory === 'out') {
      this.showCategory = false
      this.count = 0;
      event.stopPropagation();
    }
  }

  changeCategory(Category: string) {
    this.Category = Category;
    this.showCategory = false;
  }
  // videoId를 받는다.
  getCommentsWithVideoId(id: number) {
    this.comments = [];
    this.commentService.getComments(id).subscribe({
      next: (res: GetCommentDTO[]) => {
        this.comments = res;
        // console.log(res)
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  getUser(id: number) {
    this.userService.getUser(id).subscribe({
      next: (res) => {
        // console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  getVideo(id: number) {
    this.videoService.getVideo(id).subscribe({
      next: (res: ICreateVideoDTO) => {
        this.video = res;
        if (this.video.url.indexOf("https://www.youtube.com/watch?v=") === 0) {
          this.video.url = this.video.url.substring(32);
          this.video.url = this.youtubeLink.concat(this.video.url);
        }
        else {
          this.video.url = this.video.url.substring(17);
          this.video.url = this.youtubeLink.concat(this.video.url)
        }
        this.sendCategory(this.video.category);
        this.getVideosByCategory(this.video.category);
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
      if (this.isLoggedIn$ === true) {
        body.name = this.userName$;
        body.password = this.userPassword$;
      }
      this.commentService.createComment(body, this.videoId).subscribe({
        next: (res: GetCommentDTO) => {
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
  }

  modifyComment(index: number) {
    this.comment = this.comments[index];
    if (this.isLoggedIn$ === false) {
      this.createForm.setValue({
        name: this.comment.user.name,
        content: this.comment.content,
        password: ''
      })
    }
    if (this.isLoggedIn$ === true) {
      this.createForm.setValue({
        name: this.userName$,
        content: this.comment.content,
        password: this.userPassword$
      })
    }
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
    if (this.isLoggedIn$ === true) {
      const body = {
        name: this.userName$,
        password: this.userPassword$
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
    else {
      const password = window.prompt('이 댓글을 삭제하시려면 비밀번호를 입력해 주세요.')
      const body = {
        name: this.comment.user.name,
        password: password
      }
      if (!password) {
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
        return alert('비밀번호를 입력해 주시기 바랍니다.')
      }
      // console.log(body)
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
  }

  updateVideo() {
    this.navigateByUrl();
  }

  deleteVideo() {
    const checkDelete = window.confirm('정말로 삭제하시겠습니까? 영상에 달린 댓글들도 모두 삭제됩니다.')
    if (!checkDelete) {
      return window.alert('사용자가 요청을 거부하였습니다.')
    }
    this.videoService.deleteVideo(this.videoId).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/main');
        // console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  getVideosByCategory(query: string) {
    this.videoService.getVideosThumbNail(query).subscribe({
      next: (res: ICreateVideoDTO[]) => {
        this.categoryWithVideos = res
        for (let video of this.categoryWithVideos) {
          if (!video) {
            console.log('t')
          }
          // video.url = video.url.substring(8)
          // video.url = this.youtubeThumbNail.concat(video.url);
        }
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  navigateDetail(video: ICreateVideoDTO) {
    this.router.navigateByUrl(`/detail/${video.id}?title=${video?.category}`)
    this.getVideo(Number(video.id))
    this.getCommentsWithVideoId(Number(video.id))
  }

  currentVideo(video: ICreateVideoDTO) {
    // index = Number(this.video.id);
    if (this.video.id === video.id) {
      return 'flex space-y-2 gap-2 hover:bg-gray-200 cursor-pointer bg-gray-100'
    }
    else {
      return 'flex space-y-2 gap-2 hover:bg-gray-200 cursor-pointer'
    }
  }




}
