import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  baseUrl = `${environment.server}`;
  // private baseUrl: string = 'https://localhsot/';

  getUser(id: number){
    return this.http.get(`${this.baseUrl}/user/id`);
  }

  loginUser(body: any){
    return this.http.post(`${this.baseUrl}/user/searchUser`, body);
  }
}
