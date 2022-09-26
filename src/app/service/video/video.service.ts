import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private baseUrl = 'http://localhost/video'
  constructor(
    private http: HttpClient
  ) { }
  
  getVideos(){
    this.http.get<any[]>(`${this.baseUrl}`);
  }

  getVideo(id: number){
    this.http.get(`${this.baseUrl}/${id}`);
  }
}
