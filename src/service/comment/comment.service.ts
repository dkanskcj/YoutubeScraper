import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDeleteCommentDTO } from './dto/delete-comment.dto';
import { GetCommentDTO } from './dto/get-comment.dto';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) { }

  // baseUrl = `${environment.server}`;
  private baseUrl: string = 'https://youtubescraperdatabase.herokuapp.com';
  getComment(id: number) {
    return this.http.get(`${this.baseUrl}/comment/search/${id}`);
  }
  getComments(id: number) {
    return this.http.get(`${this.baseUrl}/comment/search${id}`);
  }

  getCommentsWithVideoId(id: number) {
    return this.http.get(`${this.baseUrl}/video/searchId=${id}`);
  }

  createComment(body: any, id: number): Observable<GetCommentDTO> {
    return this.http.post<GetCommentDTO>(`${this.baseUrl}/comment/createWithVideoId=${id}`, body);
  }

  updateComment(body: any, id: number) {
    return this.http.patch(`${this.baseUrl}/comment/${id}`, body);
  }

  deleteComment(body: any, id: number) {
    return this.http.patch<IDeleteCommentDTO>(`${this.baseUrl}/comment/${id}/delete`, body);
  }
}
