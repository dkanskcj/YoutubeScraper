import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { User } from 'src/service/user/user';
import { UserService } from 'src/service/user/user.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  createForm = new FormGroup({
    name: new FormControl(null),
    password: new FormControl(null),
  })
  user: User[] = [];
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(ev=>ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.getUsers();
  }


  getUsers() {
    this.http.get<User[]>(`http://localhost:3000/user`).subscribe(res => {
      console.log(res);
      this.user = res;
    })
  }

  submit() {
    const body = this.createForm.getRawValue();
    console.log(body)
    this.userService.createUser(body).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
