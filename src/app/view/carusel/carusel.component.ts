import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { cardsI } from '../../interface/cards.interface';
import { CommonModule } from '@angular/common'; 
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [CommonModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  template: `<button class="btn-sigiente" id="btn-sigiente">Siguiente</button>`,
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent implements OnInit{

  cards     :cardsI[] =[];

  breakpoints = {
    576: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1450: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  };
  constructor(private api: ApiService) {
    
  }

  ngOnInit(): void {
    this.traerDatos();
  }

 

  traerDatos(){
    try {
      this.api.getTraerCards().subscribe(data =>{
           
        if(data.listCard.length > 0){
          const {listCard } = data;
          this.cards = listCard;
          console.log(this.cards);

        }
      });
    } catch (error) {
      console.error("Error: " + error);
    }
  }

  

}
