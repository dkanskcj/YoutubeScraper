import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  baseUrl = `${environment.server}`;
  // private baseUrl: string = 'https://localhost/';

  getUser(id: number){
    return this.http.get(`${this.baseUrl}/user/id`);
  }

  loginUser(body: CreateUserDTO){
    return this.http.post(`${this.baseUrl}/user/searchUser`, body);
  }


  createUser(body: CreateUserDTO){
    return this.http.post(`${this.baseUrl}/user`, body);
  }
}
