import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardVideosComponent } from '../card-videos/card-videos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-videos',
  standalone: true,
  imports: [CommonModule,CardVideosComponent],
  templateUrl: './view-videos.component.html',
  styleUrl: './view-videos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewVideosComponent implements OnInit{

  idVideo :string;
  p : string;
  s : string;
  

  constructor(private routerAc: ActivatedRoute) {
    this.idVideo = "";
    this.p ="./videos/";
    this.s = ".mp4";

    
  }

  ngOnInit(): void {
    
    window.scrollTo(0, 0);
    this.routerAc.params.subscribe(param => {
      this.idVideo = this.p + param['v'] + this.s;
     
    });
  }




}
