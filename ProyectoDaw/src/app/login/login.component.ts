import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../types/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //Variables
  formulario:FormGroup;
  alert:boolean=false;//Alerta de errrores
  isLoading:boolean=false;//Para el spinner del botón del formulario

  constructor(private login:AuthService,private route:Router){
   this.formulario=new FormGroup({
    nombreUsuario:new FormControl('',[Validators.required]),
    contrasena:new FormControl('',[Validators.required,])
   })
  }

  inicioSesion(){
    this.isLoading=true;
    const usuario:Usuario={
      nombreUsuario:this.formulario.get('nombreUsuario')?.value,
      contrasena:this.formulario.get('contrasena')?.value
    }

    this.login.login(usuario).subscribe(
      (data)=>{
        console.log(data);
        this.login.guardarToken(data.message);
        this.route.navigate(['feed']);
      },
      (error)=>{
        console.log(error);
        this.isLoading=false;
        this.alert=true;
       setTimeout(() => {
        this.alert=false;   
        },3000);
      }

    );
  }

  cerrarAlerta(){
    this.alert=false;
  }
}
