import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Registro } from '../types/registro';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  formulario:FormGroup;
  modal:boolean=false;
  error:string='';
  isLoading:boolean=false;
  constructor(private registro:AuthService, private route:Router){
    this.formulario=new FormGroup({
      nombreUsuario:new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z][._-]?[0-9]*){4,20}$')]),/*Patrón para un nombre de usuario de 4 a 20 caracteres, que comineze con una letra y pueda tener un número,ounto,guión y guión bajo*/
      contrasena:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).+$')]),/* Un patrón para 
      -Al menos una letra mayúscula

      -Al menos un dígito
      
      -Al menos un carácter no alfanumérico (como !@#$%&*) */
      contrasena2:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).+$')])
    });

   

  }
  registrar(){
    this.isLoading=true;//Para controlar el estado del spinner

    if(this.formulario.invalid){
      if(this.formulario.get('contrasena')?.value!==this.formulario.get('contrasena2')?.value){
        this.error='Las contraseñas no coinciden';
        this.modal=true;
        this.isLoading=false;
        setTimeout(()=>{
          this.modal=false;
          
        },3000);

        return;//Para que no se sobrescriba la alerta del error.
      }
      this.error='Los campos no deben de estar vacíos';
      this.modal=true;
      this.isLoading=false;
      setTimeout(()=>{
        this.modal=false;
        
      },3000)
      return;
    }

    const formulario=this.formulario.value;
    
    const usuario:Registro={
      nombreUsuario:formulario.nombreUsuario,
      correo:'',
      contrasena:formulario.contrasena,
      avatar:''
    };

    this.registro.registro(usuario).subscribe(
      (data)=>{
        this.isLoading=false;//Lo cambiamos a false si ya hay una respuesta
        console.log(data);
        this.route.navigate(['feed']);
      },
      (error)=>{
        this.isLoading=false;
        this.error='Este usuario ya existe en el sistema';
        this.modal=true;
        setTimeout(()=>{
          this.modal=false;
        },3000)
        console.log(error);
      }

    );
  }
  cerrarAlerta(){
    this.modal=false;
  }
}
