import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-videos.component.html',
  styleUrl: './card-videos.component.css'
})
export class CardVideosComponent implements OnInit, AfterViewInit{
  
  @ViewChildren('videoElement') videoElements!: QueryList<ElementRef>;

  @Input() canVideos: number;
  @Input() tipoVideo : string;

  constructor( private router: Router){
    this.canVideos = 10;
    this.tipoVideo = 'h';
  }
  

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          const source = video.querySelector('source');
  
          if (source) {
            const videoSrc = source.dataset["src"]; 
  
            if (videoSrc) {
              source.src = videoSrc; 
              video.load(); 
            }
          }
  
          obs.unobserve(video); 
        }
      });
    }, { threshold: 0.5 });
  
    this.videoElements.forEach(video => observer.observe(video.nativeElement));
  }

  
  playVideo(video: HTMLVideoElement) {

    video.muted = true; 

    video.play().catch(error => {
      console.warn("No se pudo reproducir el video automáticamente:", error);
    });

    const divBajoVideo = video.nextElementSibling as HTMLElement;

    if (divBajoVideo) {
      divBajoVideo.style.display = 'flex';

    }
  }
  
  pauseVideo(video: HTMLVideoElement) {

    video.pause();

    video.currentTime = 0;

    const divBajoVideo = video.nextElementSibling as HTMLElement;

    if (divBajoVideo) {
      divBajoVideo.style.display = 'none';

    }
  }

  viewVideo(id: number){
    this.router.navigate(['redirect',id]);
  }
  
  
}
