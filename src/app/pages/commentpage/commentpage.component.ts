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
    content: new FormControl(null),
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
    if(!body){
      console.log('t')
    }
    else{
      // this.commentService.createComment(body, )
    }
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
