import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/service/comment/comment.service';
import { CreateVideoDTO } from 'src/service/video/dto/create-video.dto';
import { FindVideosByCategoryDTO } from 'src/service/video/dto/findByCategory.dto';
import { VideoService } from 'src/service/video/video.service';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
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
  @Output() detailCategory: string;
  @ViewChild('modal', { static: false }) modal: DeleteCommentComponent
  currentCategory = '전체';

  private baseUrl: string = 'http://localhost:80/comment';

  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null),
    content: new FormControl(null),
  });
  video: any;
  videoId: number = 0;
  youtubeLink: string = 'https://www.youtube.com/embed/'
  // comments: commentList[] = [];
  comments: any;
  categoryWithVideos: any;
  // youtubeThumbNail: string =  'https://img.youtube.com/vi/';
  isLoading: boolean = true;

  constructor(
    private commentService: CommentService,
    private videoService: VideoService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
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


  // videoId를 받는다.
  getCommentsWithVideoId(id: number) {
    this.http.get(`${this.baseUrl}/search${id}`).subscribe({
      next: (res) => {
        this.comments = res;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }


  getVideo(id: number) {
    this.videoService.getVideo(id).subscribe({
      next: (res: CreateVideoDTO) => {
        this.video = res;
        console.log(res);
        this.video.url = this.video.url.substring(17);
        this.video.url = this.youtubeLink.concat(this.video.url)
        this.sendCategory(this.video.category);
        this.getVideosByCategory(this.video.category)
        // console.log(res)
      },
      error: (err) => {
        console.log(err);
      },
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
        this.comments.push(res);
        // this.router.navigateByUrl('/');
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  sendCategory($event) {
    this.detailCategory = $event;
    console.log(this.detailCategory)
  }
  getVideosByCategory(query: string) {
    this.videoService.getVideosThumbNail(query).subscribe({
      next: (res) => {
        this.categoryWithVideos = res
        for(let video of this.categoryWithVideos){
          if(!video){
            console.log('t')
          }
          // video.url = video.url.substring(8)
          // video.url = this.youtubeThumbNail.concat(video.url);
        }
        console.log(this.categoryWithVideos)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  navigateDetail(video:CreateVideoDTO){
    this.router.navigateByUrl(`/detail/${video.id}?title=${video?.category}`)
    this.getVideo(Number(video.id))
    this.getCommentsWithVideoId(Number(video.id))
  }
  setOpen() {
    this.modal.open();
  }
}
