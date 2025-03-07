import { CommonModule } from '@angular/common';
import {  Component, HostListener, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() asideStyle: String;
  @Input() classMax: String;
 
  menuMini: boolean;
  menuMax : boolean;
  width : number;

  constructor(private router: Router) {
    this.asideStyle = "";
    this.classMax = "";
    this.menuMini = false;
    this.menuMax = true;
    this.width = window.innerWidth;
  }


  ngDoCheck() {
    
    if (this.asideStyle == "width: 15%;") {
      this.menuMini = false;
      this.menuMax = true;
    } else {
      this.menuMini = true;
      this.menuMax = false;
    }

    if (this.width <= 580) {
      this.menuMini = false;
      this.menuMax =true;
    } else if (this.width <= 1024) {
      this.menuMini = true;
      this.menuMax =true;
    }


  }

  irVista(vista: string){
    this.router.navigate([vista]);
  }

}
