import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private baseUrl: string = 'http://localhost:3000/content'
  constructor(
    private httpClient: HttpClient
  ) { }

  getComments(){
    return this.httpClient.get(`${this.baseUrl}`);
  }
  getComment(id: number){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createComment(body: any, id: number){
    return this.httpClient.post(`${this.baseUrl}/${id}`, body);
  }
}
