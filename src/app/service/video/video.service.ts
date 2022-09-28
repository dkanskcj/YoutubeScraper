import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateVideoDTO } from './dto/create-video.dto';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'http://localhost/video';
  constructor(private http: HttpClient) {}

  createVideo(body: CreateVideoDTO) {
    return this.http.post(`${this.baseUrl}`, body);
  }

  getVideo(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getVideos() {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
