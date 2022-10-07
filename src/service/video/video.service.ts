import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { ICreateVideoDTO } from './dto/create-video.dto';
import { IGetVideosDTO } from './dto/get-videos.dto';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  
  baseUrl = `${environment.server}`;
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
    return this.http.get<IGetVideosDTO[]>(`${this.baseUrl}/video/all`);
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
