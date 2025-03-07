<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

>>>>>>> 125d05e1bf9012643a0e9be524ac4906f421147a

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
=======
  imports: [RouterOutlet],
>>>>>>> 125d05e1bf9012643a0e9be524ac4906f421147a
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD

  title = 'youtube';
  aside : string;
  width : number;
  classMax: string;

  constructor(){
    this.aside ="width: 15%;";
    this.classMax = "menu-max";
    this.width = window.innerWidth;
  
  }
  ngDoCheck() {
    if (this.width <= 580) {

    } else if (this.width <= 1024) {
      this.aside ="width: 6%;";

    }
  }

  tamanioMenu(t : string){
    if(this.aside == "width: 15%;"){
      this.aside = "width: " + t + "%;";
    }else{
      this.aside ="width: 15%;";
    }

    if(this.classMax == "menu-max" && this.width <= 1024){
      this.classMax ="menu-max2";
    }else if(this.width <= 1024){
      this.classMax ="menu-max";
    }
   
  }
=======
  title = 'prueba';
>>>>>>> 125d05e1bf9012643a0e9be524ac4906f421147a
}
