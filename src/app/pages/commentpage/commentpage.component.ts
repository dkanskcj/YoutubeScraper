import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommentService } from 'src/service/comment/comment.service';
import { User } from 'src/service/user/user-interface';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.scss']
})
export class CommentpageComponent implements OnInit {
  private baseUrl: string = 'http://localhost:3000/user';
  private baseUrlComment: string = 'http://localhost:3000/comment';

  createComment = new FormGroup({
    context: new FormControl(null),

  })

  constructor(
    private http: HttpClient,
    private userSerivce: UserService,
    private commentService: CommentService,
    private router: Router
  ) { }


  test: User[] = [];
  ngOnInit(): void {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error)
      }
    });
  }


  getUsers() {
    this.http.get<User[]>(`${this.baseUrl}`).subscribe({
      next: (res) => {
        console.log(res)
        this.test = res;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  submit() {
    const body = this.createComment.getRawValue();
    if (body) {
      console.log(body)
    }
    // else {
    // this.commentService.createComment(body).subscribe({
    //   next: (res) => {
    //     this.router.navigateByUrl('/userlist')
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // })
    // }
  }

  getComment() {
    this.http.get<Comment[]>(`${this.baseUrlComment}`).subscribe({
      next: (res) => {
        console.log('comment => ', res)
      },
      error: (error) => {
        console.log(error)
      }
    });
  }


}
