import { SafeUrl } from "@angular/platform-browser";

export interface CardCompleto {//Toda la información del card,usuario,video, likes..etc
    id:number;
    titulo:string;
    url:string;
    descripcion:string;
    vistas:number;
    fechaSubida:Date;
    categoria:string;
    nombreUsuario:string;
    likes:number;
    safeUrl:SafeUrl | undefined;
}
