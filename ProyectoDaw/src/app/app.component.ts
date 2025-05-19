import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  

  constructor(private route:Router){}

  ngOnInit(){
   
  }
  isLoginOrRegister(){
    return this.route.url==='/login'|| this.route.url==='/registro' || this.route.url=='/perfil';
  }
}
