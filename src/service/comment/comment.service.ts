import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CommentService {

  constructor(private http: HttpClient) {}

  baseUrl = `${environment.server}`;

  createComment(body: any, id: number) {
    return this.http.post(`${this.baseUrl}/comment/createWithVideoId${id}`, body);
  }

  
}
