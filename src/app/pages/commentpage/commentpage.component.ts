import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommentService } from 'src/service/comment/comment.service';
import { User } from 'src/service/user/user-interface';
import { UserService } from 'src/service/user/user.service';

type testInput = {
  name: string;
  password: string;
  // context: string;
}

type contexts = {
  id: number;
  name: string;
  context: string;
  date: Date;
}

type getDate = {
  // context: string;
  getDate: any;
}

@Component({
  selector: 'app-commentpage',
  templateUrl: './commentpage.component.html',
  styleUrls: ['./commentpage.component.scss']
})
export class CommentpageComponent implements OnInit {
  private baseUrl: string = 'http://localhost:3000/user';
  private baseUrlComment: string = 'http://localhost:3000/comment';
  is_clicked: number = 1;

  createComment = new FormGroup({
    context: new FormControl(null),
    name: new FormControl(null),
    password: new FormControl(null),
  })
  testContexts: contexts[] = [];
  testDate: getDate[] = [];
  // comments: testInput[] = [];
  addUser: User[] = [];
  addComment: Comment[] = [];
  inputs: User[] = [];
  whatDate = new Date();
  user: User[];
  constructor(
    private http: HttpClient,
    private userSerivce: UserService,
    private commentService: CommentService,
    private router: Router,
  ) {
  }
  currentDate = new Date();
  getUserId: number = 0;

  ngOnInit(): void {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.getUsers();
        this.getComment();
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.getUsers();
    this.getUser();
    // this.createdAt.setDate(this.createdAt.getDate());
  }

  isClicked(ev: any) {
    // console.log('ev => ', ev)
    if (ev === 1) {
      this.is_clicked === 1
    }
    if (ev === 2) {
      this.is_clicked === 2
    }
    if (ev === 3) {
      this.is_clicked === 3
    }
  }

  getUsers() {
    this.http.get<User[]>(`${this.baseUrl}`).subscribe({
      next: (res) => {
        console.log(res)
        this.inputs = res;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }


  getUser(){
    this.userSerivce.getUser(this.getUserId).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
  submit() {
    const body = this.createComment.getRawValue();
    if (body) {
      for (let input of this.inputs) {
        // console.log(input);
        if (input.name === body.name && input.password === body.password) {
          if (body.context) {
            this.userSerivce.getUser(input.id).subscribe({
              next: (res) => {
                console.log(res)
              },
              error: (e) => {
                console.log(e)
              }
            })
            console.log(this.testContexts)
            console.log(input.name, input.password)
            this.whatDate = new Date();
            console.log('test = > ', this.whatDate)
            // const cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');

            this.testContexts.push({
              id: input.id,
              name: input.name,
              context: body.context,
              date: this.whatDate
            })
          }
          else {
            console.log('test')
          }
        }
      }
    }
    // const body = this.createComment.getRawValue();
    // if (!body) {
    //   console.log(body)
    // }
    // else {
    //   console.log(body)
    //   this.commentService.createComment(body).subscribe({
    //     next: (res) => {
    //       console.log(res)
    //     },
    //     error: (error) => {
    //       console.log(error)
    //     }
    //   })
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
