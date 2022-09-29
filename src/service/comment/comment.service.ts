import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl: string = 'http://localhost:80/comment';
  private videoUrl: string = 'http://localhost/video'
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getComment(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createComment(body: any, id: number) {
    return this.http.post(`${this.baseUrl}/${id}`, body);
  }

  getCommentsWithVideoId(id: number) {
    return this.http.get(`${this.videoUrl}/searchid=${id}`);
  }
}
