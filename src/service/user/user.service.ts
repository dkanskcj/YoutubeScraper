import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/user';

  constructor(
    private httpClient: HttpClient
  ) { }


  userList: User[] = [];

  getUsers(){
    // return this.user;
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  getUser(id: number){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  createUser(body: any){
    return this.httpClient.post(`${this.baseUrl}`, body);
  }
  updateUser(id: number, body: any){
    return this.httpClient.put(`${this.baseUrl}/${id}`, body);
  }
  deleteUser(id: number){
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
