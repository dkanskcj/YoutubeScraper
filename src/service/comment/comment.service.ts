import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl: string = 'http://localhost:80/';
  // private videoUrl: string = 'http://localhost/video'

  constructor(private http: HttpClient) {}

  // getComments() {
  //   return this.http.get<any[]>(`${this.baseUrl}/comment`);
  // }

  // getCommentByVideo(id: number) {
  //   return this.http.get(`${this.baseUrl}/video/${id}/comments`);  //이거로 다 고치기
  // }

  createComment(body: any, id: number) {
    return this.http.post(`${this.baseUrl}/video/${id}`, body);
  }

  getCommentsWithVideoId(id: number) {
    return this.http.get(`${this.baseUrl}/video/searchId=${id}`);
  }
}
