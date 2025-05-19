import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../types/video';
import { PutVideo } from '../types/putVideo';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  url=environment.baseUrl+'/Videos';
  constructor(private http:HttpClient) { }

  get():Observable<Video[]>{
  return this.http.get<Video[]>(this.url); 
  }

  put(id:number,video:PutVideo){

    return this.http.put(this.url+'/'+id,video);    
  }
}
