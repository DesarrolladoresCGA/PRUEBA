import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() tMenu: EventEmitter<string>;
  constructor(private router: Router) {
    this.tMenu = new EventEmitter();
    
  }

  cambiarTamanioMenu(t: string){
    this.tMenu.emit(t);
  }

  irVista(vista : string){
    this.router.navigate([vista]);
  }
}
