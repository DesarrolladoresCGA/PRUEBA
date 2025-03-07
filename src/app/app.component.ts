import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
}
