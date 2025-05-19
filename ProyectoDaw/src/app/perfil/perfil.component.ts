import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../types/usuario';
import { Users } from '../types/users';
import { Video } from '../types/video';
import { VideosService } from '../services/videos.service';
import { forkJoin } from 'rxjs';
import { Like } from '../types/like';
import { LikesService } from '../services/likes.service';
import { CardCompleto } from '../types/cardCompleto';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  usuario: Users = {
    id: 0,
    nombreUsuario: '',
    avatar: '',
    fechaRegistro: new Date()
  };
  videosLike: Video[] = [];
  videosPropios: Video[] = [];
  videos: Video[] = [];
  likes: Like[] = [];
  infoCard: CardCompleto[] = [];
  usuarios: Users[] = [];

  constructor(private usuariosService: AuthService, private videoService: VideosService, private likeService: LikesService, private userService: AuthService,private sanitizer: DomSanitizer) {


  }


  ngOnInit(): void {
    forkJoin({
      videos: this.videoService.get(),
      usuario: this.usuariosService.obtenerPerfil(),
      likes: this.likeService.getLikes(),
      usuarios: this.userService.get()
    }).subscribe({
      next: (results) => {
        this.videos = results.videos;
        this.usuario = results.usuario;
        this.likes = results.likes;
        this.usuarios = results.usuarios;
        //Obtenemos los videos propios del usuario y los que les ha dado like.
        this.videosPropios = this.videos.filter(item => item.usuarioId == this.usuario.id);

        // Aquí ya tienes ambos datos disponibles
        for (let i = 0; i < this.likes.length; i++) {
          if (this.usuario.id == this.likes[i].usuarioId) {
            const encontrado = this.videos.find(item => item.id == this.likes[i].videoId);
            const usuario = this.usuarios.find(item => item.id == encontrado?.usuarioId);
            const likeados = this.likes.filter(item => item.videoId == encontrado?.id);

            if (encontrado && usuario && likeados) {
              this.infoCard.push({
                id: encontrado.id,
                titulo: encontrado.titulo,
                url: encontrado.url,
                descripcion: encontrado.categoria,
                vistas: encontrado.vistas,
                fechaSubida: new Date(encontrado.fechaSubida),
                categoria: encontrado.categoria,
                nombreUsuario: usuario.nombreUsuario,
                likes: likeados.length,
                safeUrl: undefined
              });
            }

          }

        }
        

      },
      error: (error) => {
        console.log('Error en alguna de las llamadas:', error);
      }
    });


  }
  unirse() {
    this.usuario.fechaRegistro = new Date(this.usuario.fechaRegistro);

    switch (this.usuario.fechaRegistro.getMonth()) {
      case 0:
        return 'Enero de ' + this.usuario.fechaRegistro.getFullYear();

      case 1:
        return 'Febrero de ' + this.usuario.fechaRegistro.getFullYear();

      case 2:
        return 'Marzo de ' + this.usuario.fechaRegistro.getFullYear();

      case 3:
        return 'Abril de ' + this.usuario.fechaRegistro.getFullYear();

      case 4:
        return 'Mayo de ' + this.usuario.fechaRegistro.getFullYear();

      case 5:
        return 'Junio de ' + this.usuario.fechaRegistro.getFullYear();

      case 6:
        return 'Julio de ' + this.usuario.fechaRegistro.getFullYear();

      case 7:
        return 'Agosto de ' + this.usuario.fechaRegistro.getFullYear();

      case 8:
        return 'Septiembre de ' + this.usuario.fechaRegistro.getFullYear();
      case 9:
        return 'Octubre de ' + this.usuario.fechaRegistro.getFullYear();

      case 10:
        return 'Noviembre de ' + this.usuario.fechaRegistro.getFullYear();

      case 11:
        return 'Diciembre de ' + this.usuario.fechaRegistro.getFullYear();

    }
    return 'No hay fecha';
  }

   sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
