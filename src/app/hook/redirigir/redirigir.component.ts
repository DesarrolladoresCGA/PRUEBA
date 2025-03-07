import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirigir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redirigir.component.html',
  styleUrl: './redirigir.component.css'
})
export class RedirigirComponent implements OnInit{

  id: string;

  constructor(private router: Router, private acRouter: ActivatedRoute){
    this.id = "";

    this.acRouter.params.subscribe(param =>{
      this.id = param['v'];
    });
  }

  ngOnInit(): void {
    this.router.navigate(['watch' ,this.id]);
  }

}
