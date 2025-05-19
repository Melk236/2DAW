import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Usuario } from '../types/usuario';
import { Observable } from 'rxjs';
import { Registro } from '../types/registro';
import { Users } from '../types/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = environment.baseUrl + '/Usuarios';

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.Url + '/login', usuario);
  }

  guardarToken(token: string) {
    localStorage.setItem('jwt', token);
  }
  obtenerToken() {
    localStorage.getItem('jwt');
  }

  cerrarSesion() {
    localStorage.removeItem('jwt');
  }
  obtenerPerfil(): Observable<Users> {//Para la interfaz del perfil.
    const token = localStorage.getItem('jwt');
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Users>(this.Url + '/perfil', { headers });
  }

  registro(usuario: Registro): Observable<string> {
    return this.http.post<string>(this.Url + '/register', usuario);
  }

  get(): Observable<Users[]> {
    return this.http.get<Users[]>(this.Url);
  }


}
