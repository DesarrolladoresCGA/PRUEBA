import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVideosComponent } from './card-videos.component';

describe('CardVideosComponent', () => {
  let component: CardVideosComponent;
  let fixture: ComponentFixture<CardVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
