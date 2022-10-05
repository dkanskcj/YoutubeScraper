import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreateVideoDTO } from './dto/create-video.dto';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'http://localhost/video';
  constructor(private http: HttpClient) {}

  createVideo(body: ICreateVideoDTO) {
    return this.http.post(`${this.baseUrl}`, body);
  }

  getVideo(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getVideosByCategory(query: string){
    return this.http.get(`${this.baseUrl}/search?query=${query}`);
  }
  getVideosThumbNail(query: string){
    return this.http.get(`${this.baseUrl}/thumbNailImg?query=${query}`);
  }
  getVideos() {
    return this.http.get<ICreateVideoDTO[]>(`${this.baseUrl}?pageNo=1&pageSize=10`);
  }
}
