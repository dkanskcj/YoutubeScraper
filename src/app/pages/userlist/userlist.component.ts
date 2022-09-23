import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, first } from 'rxjs';
import { User } from 'src/service/user/user-interface';
import { UserService } from 'src/service/user/user.service';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  private baseUrl = 'http://localhost:3000/user';
  users: User[] = [];
  isLoading: boolean = false;
  currentNum: number;
  
  
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }
  
  
  
  ngOnInit(): void {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error)
      }
    })
    this.getUsers();
  }

  getUsers(){
    this.http.get<User[]>(`${this.baseUrl}`).subscribe({
      next: (res) => {
        this.users = res;
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  deleteUser(id: number){
    const user = this.users.find(x => x.id === id);
    this.isLoading = true;
    if(!user){
      return ;
    }
    // else{
    //   this.userService.deleteUser(id).pipe(first()).subscribe({
    //     next: (res) => {
    //       this.getUsers();
    //       this.isLoading = false;
    //     },
    //     error: (error) => {
    //       console.log(error)
    //     }
    //   })
    // }
  }
}
