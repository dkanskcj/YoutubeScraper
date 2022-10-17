import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreateVideoDTO } from './dto/create-video.dto';
import { environment } from 'src/environments/environment';
import { IGetVideosDTO } from './dto/get-videos.dto';
import { IUpdateVideoDTO } from './dto/update-video.dto';

export type VideosResult = {
  angular:[];
  html:[];
  javascript:[];
  react:[];
  tailwindcss:[];
}

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  
  // baseUrl = `${environment.server}`;
  private baseUrl: string = 'https://localhsot/';
  getVideo(id: number) {
    return this.http.get(`${this.baseUrl}/video/${id}`);
  }
  getVideosByCategoryWithPagination(query: string){
    return this.http.get(`${this.baseUrl}/video?pageNo=1&pageSize=5&category=${query}`)
  }
  getVideosByCategory(query: string){
    return this.http.get(`${this.baseUrl}/video/search?query=${query}`);
  }

  getVideosThumbNail(query: string){
    return this.http.get(`${this.baseUrl}/video/thumbNailImg?query=${query}`);
  }
  getVideos(){
    return this.http.get<VideosResult>(`${this.baseUrl}/video/all`);
  }
  createComment(body: any, id: number) {
    return this.http.post(`${this.baseUrl}/video/${id}`, body);
  }
  createVideo(body: ICreateVideoDTO) {
    return this.http.post(`${this.baseUrl}/video`, body);
  }
  updateVideo(body: any, id: number){
    return this.http.patch(`${this.baseUrl}/video/${id}`, body);
  }
  deleteVideo(id: number){
    return this.http.delete(`${this.baseUrl}/video/${id}`);
  }

}
