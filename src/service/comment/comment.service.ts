import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl: string = 'http://localhost:3000/comment'

  constructor(
    private httpClient: HttpClient
  ) { }
  getComments(){
    return this.httpClient.get(`${this.baseUrl}`);
  }
  getComment(id: number){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createComment(body: any){
    return this.httpClient.put(`${this.baseUrl}`, body);
  }
}
