import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  menu : string ="menu-nav";

  constructor(){}

  ngOnInit(): void {
    
  }

  motrarYocultar(){
    if(this.menu =='menu-nav'){
      this.menu ="menu-nav2";
    }else{
      this.menu ="menu-nav";
    }
  }


}
