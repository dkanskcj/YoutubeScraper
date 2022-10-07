import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreateVideoDTO } from './dto/create-video.dto';
import { IGetVideosDTO } from './dto/get-videos.dto';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  baseUrl = `${environment.server}`;

  getVideos() {
    return this.http.get<IGetVideosDTO[]>(`${this.baseUrl}/video/all`);
  }
  getVideo(id: number) {
    return this.http.get(`${this.baseUrl}/video/${id}`);
  }
  getVideosByCategory(query: string) {
    return this.http.get(`${this.baseUrl}/video/search?query=${query}`);
  }

  getCommentsWithVideoId(id: number) {
    return this.http.get(`${this.baseUrl}/video/${id}/comments`);
  }

  getVideosThumbNail(query: string) {
    return this.http.get(`${this.baseUrl}/video/thumbNailImg?query=${query}`);
  }
  createVideo(body: ICreateVideoDTO) {
    return this.http.post(`${this.baseUrl}/video`, body);
  }
  createComment(body: any, id: number) {
    return this.http.post(
      `${this.baseUrl}/comments/createWithVideoId/${id}`,
      body
    );
  }
}
