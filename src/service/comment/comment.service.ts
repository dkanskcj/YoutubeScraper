import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  baseUrl = `${environment.server}`;
  getComment(id: number){
    return this.http.get(`${this.baseUrl}/comment/search/${id}`);
  }
  getComments(id: number){
    return this.http.get(`${this.baseUrl}/comment/search${id}`);
  }
  
  getCommentsWithVideoId(id: number) {
    return this.http.get(`${this.baseUrl}/video/searchId=${id}`);
  }
  
  createComment(body: any, id: number) {
    return this.http.post(`${this.baseUrl}/comment/createWithVideoId=${id}`, body);
  }

  updateComment(body: any,id: number){
    return this.http.delete(`${this.baseUrl}/comment/${id}`, body)
  }
}
