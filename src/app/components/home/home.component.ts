import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardVideosComponent } from '../card-videos/card-videos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardVideosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  btnFiltro  : boolean = false;
  
  
  ngDoCheck() {
    this.checkOverflow();
  }

  checkOverflow() {
    const CONTAINER = document.getElementById("con-filter") as HTMLDivElement;

    if (CONTAINER.scrollWidth > CONTAINER.clientWidth) {

      this.btnFiltro = true;
    } else {

      this.btnFiltro = false;
    }
  }

  scrollIzquierda() {
    const CONTAINER = document.getElementById("con-filter") as HTMLDivElement;

    if (CONTAINER) {
      CONTAINER.scrollLeft -= 100;
    }
  }

  scrollDerecha() {

    const CONTAINER = document.getElementById("con-filter") as HTMLDivElement;

    if (CONTAINER) {
      CONTAINER.scrollLeft += 100;
    }
  }


}
