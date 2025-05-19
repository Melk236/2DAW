import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Like } from '../types/like';
import { CardCompleto } from '../types/cardCompleto';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  url=environment.baseUrl+'/Likes';
  constructor(private http:HttpClient) { }

  getLikes():Observable<Like[]>{
    return this.http.get<Like[]>(this.url);
  }

  post(usuario:number,video:number):Observable<Like>{
    const body={
      usuarioId:usuario,
      videoId:video
    }
    return this.http.post<Like>(this.url,body);
  }

  delete(id:number){
    return this.http.delete(this.url+'/'+id);
  } 

}
