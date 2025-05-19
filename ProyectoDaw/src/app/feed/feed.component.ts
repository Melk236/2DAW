import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VideosService } from '../services/videos.service';
import { Video } from '../types/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Users } from '../types/users';
import { forkJoin } from 'rxjs';
import { CardCompleto } from '../types/cardCompleto';
import { LikesService } from '../services/likes.service';
import { Like } from '../types/like';
import { Usuario } from '../types/usuario';
import { PutVideo } from '../types/putVideo';


@Component({
  selector: 'app-feed',
  imports: [CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
  encapsulation: ViewEncapsulation.None // 👈 ¡Esto es clave!
})
export class FeedComponent implements OnInit {
  //Variables
  videoClickeado: {[key: number]: boolean} = {};
  visitado: string = 'No visitado';//Para controlar que un usuario no sume tantas visitas a menos que cierre sesion.
  videos: Video[] = [];
  usuarios: Users[] = [];
  infoCard: CardCompleto[] = [];//Para la información completa de los cards:like,comentarios...etc;
  likes: Like[] = [];
  usuarioSesion: Users = {
    id: 0,
    nombreUsuario: '',
    avatar: '',
    fechaRegistro: new Date()
  }

    
  
  constructor(private videoService: VideosService, private sanitizer: DomSanitizer, private userService: AuthService, private likeService: LikesService) { }//Inyección de dependencias

  ngOnInit() {
    //Nos traemos los videos de la DB.
    forkJoin({
      videos: this.videoService.get(),
      usuarios: this.userService.get(),
      likes: this.likeService.getLikes()
    }).subscribe({
      next: (results) => {
        this.videos = results.videos;
        this.usuarios = results.usuarios;
        this.likes = results.likes;
        console.log('Videos:', this.videos);
        console.log('Usuarios:', this.usuarios);

        // Aquí ya tienes ambos datos disponibles
        for (let i = 0; i < this.videos.length; i++) {
          const usuario = this.usuarios.find(item => item.id == this.videos[i].usuarioId);
          const like = this.likes.filter(item => item.videoId == this.videos[i].id);
          if (usuario) {
            this.infoCard.push({
              id: this.videos[i].id,
              titulo: this.videos[i].titulo,
              url: this.videos[i].url,
              descripcion: this.videos[i].descripcion,
              vistas: this.videos[i].vistas,
              fechaSubida: new Date(this.videos[i].fechaSubida),
              categoria: this.videos[i].categoria,
              nombreUsuario: usuario.nombreUsuario,
              likes: like.length,
              safeUrl: undefined
            });
          }
        }
        this.infoCard = this.infoCard.map(video => ({
          ...video,
          safeUrl: this.sanitizeUrl(video.url)
        }));

      },
      error: (error) => {
        console.log('Error en alguna de las llamadas:', error);
      }
    });
    //Nos traemos el usuario que está iniciado sesión
    this.userService.obtenerPerfil().subscribe(
      (data) => {
        this.usuarioSesion = data;


      },
      (error) => {
        console.log(error);
      }
    )


  }
  

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  //Para los filtros de los videos

  filtros(evento: Event) {
    this.infoCard = [];
    const valor = evento.target as HTMLElement;
    for (let i = 0; i < this.videos.length; i++) {
      const usuario = this.usuarios.find(item => item.id == this.videos[i].usuarioId);
      const like = this.likes.filter(item => item.videoId == this.videos[i].id);
      if (usuario) {
        this.infoCard.push({
          id: this.videos[i].id,
          titulo: this.videos[i].titulo,
          url: this.videos[i].url,
          descripcion: this.videos[i].descripcion,
          vistas: this.videos[i].vistas,
          fechaSubida: new Date(this.videos[i].fechaSubida),
          categoria: this.videos[i].categoria,
          nombreUsuario: usuario.nombreUsuario,
          likes: like.length,
          safeUrl: undefined
        });
      }
    }
    this.infoCard = this.infoCard.map(video => ({//Para que los videos no esten parapeando cada dos por tres.
      ...video,
      safeUrl: this.sanitizeUrl(video.url)
    }));
    switch (valor.textContent?.toLowerCase()) {
      case 'recientes':
        this.infoCard.sort((a, b) => b.fechaSubida.getTime() - a.fechaSubida.getTime());
        break;
      case 'populares':
        this.infoCard.sort((a, b) => b.vistas - a.vistas);
        break;
      case 'partidos memorables':
        this.infoCard = this.infoCard.filter(item => item.categoria == 'Partidos memorables');
        break;
      case 'goles icónicos':
        this.infoCard = this.infoCard.filter(item => item.categoria == 'Goles iconicos');
        break;
      case 'jugadores legendarios':
        this.infoCard = this.infoCard.filter(item => item.categoria == 'Jugadores legendarios');
        break;
      case 'torneos históricos':
        this.infoCard = this.infoCard.filter(item => item.categoria == 'Torneos históricos');
        break;

    }


  }

  darLike(idVideo: number, j: number) {

    //No hace falta comprobar si el usuario ya le ha dado like o no porque esta contemplado en las relaciones.
    
    const encontrado = this.likes.find(item => item.videoId == idVideo && item.usuarioId == this.usuarioSesion.id);

    if (encontrado !== undefined) {//Si sencuentra en la base de datos se elimina
      this.likeService.delete(encontrado.id).subscribe(
        (data) => {
          console.log(data);
          this.infoCard[j].likes--;

          for (let i = 0; i < this.likes.length; i++) {//Para encontrar la posicion del like.
            if (this.likes[i].videoId == idVideo && this.likes[i].usuarioId == this.usuarioSesion.id) {
              this.likes.splice(i, 1);//Cogemos esa posicion y la boramos
            }
          }
        },
        (error) => {
          console.log(error);
        }
      )

    }
    else {//Si no se añade.
      this.likeService.post(this.usuarioSesion.id, idVideo).subscribe(
        (data) => {

          this.likes.push({
            id: data.id,
            fecha: new Date(),
            usuarioId: this.usuarioSesion.id,
            videoId: idVideo
          });
          this.infoCard[j].likes++;
        },
        (error) => {
          console.log(error)
        }
      );
    }

  }


  rellenarCorazon(videoId: number) {

    const like = this.likes.find(item => item.videoId == videoId && item.usuarioId == this.usuarioSesion.id);


    if (like) {
      return true;
    }

    return false;

  }

  //Al hacer click en una etiqueta iframe sumamos las vsisitas
  // Reemplaza tu método visitas() actual con este
visitas(idVideo: number) {
  const encontrado = this.videos.find(item => item.id == idVideo);
  alert('Hola');
  if (encontrado) {
    const videoPut: PutVideo = {
      titulo: encontrado?.titulo,
      url: encontrado.url,
      descripcion: encontrado.descripcion,
      vistas: encontrado.vistas + 1,
      categoria: encontrado.categoria,
      usuarioId: encontrado.usuarioId
    }
    for(let i=0;i<this.infoCard.length;i++){
      if(this.infoCard[i].id==idVideo){
        this.infoCard[i].vistas=encontrado.vistas+1;
      }
    }
    console.log(videoPut);
    this.videoService.put(idVideo, videoPut).subscribe(
      (data) => {
        console.log(data);
        
        // Reproducir el video después de actualizar las visitas
        this.reproducirVideo(idVideo);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

// Método privado para manejar la reproducción
private reproducirVideo(idVideo: number) {
  // Seleccionar el iframe por su ID
  const iframe = document.getElementById('youtube-video-' + idVideo) as HTMLIFrameElement;
  
  if (iframe && iframe.src) {
    // Agregar autoplay=1 a la URL si no lo tiene ya
    if (!iframe.src.includes('autoplay=1')) {
      // Guardar la URL original
      const srcOriginal = iframe.src;
      
      // Agregar parámetro autoplay
      const srcNueva = srcOriginal.includes('?') 
        ? srcOriginal + '&autoplay=1' 
        : srcOriginal + '?autoplay=1';
      
      // Actualizar la URL
      iframe.src = srcNueva;
    }
  }
}
// Método para manejar el clic en el video
handleVideoClick(idVideo: number, event: MouseEvent) {
  // Primero registramos la visita
  this.visitas(idVideo);
  
  // Luego quitamos el overlay para permitir la interacción con el iframe
  const overlay = event.target as HTMLElement;
  if (overlay) {
    // Opción 1: Quitar completamente el overlay
    overlay.style.display = 'none';
    
    // Opción 2 (alternativa): Reducir el z-index para dejar pasar eventos al iframe
    // overlay.style.zIndex = '-1';
  }
  
  // Registramos que este video ya fue clickeado
  this.videoClickeado[idVideo] = true;
  
  // Enfocar el iframe para permitir controles de teclado
  setTimeout(() => {
    const iframe = document.getElementById('youtube-video-' + idVideo);
    if (iframe) {
      iframe.focus();
    }
  }, 100);
}


}
