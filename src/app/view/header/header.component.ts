import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDropdownOpen = false;
  constructor (){


  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  toggleDropdownNo() {
    this.isDropdownOpen = false;
  }

  



}
