import { Component, OnInit, Input } from '@angular/core';
import { VideoGame } from 'src/app/shared/models/video-game.model';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  @Input() videoGame: VideoGame;
  constructor() { }

  ngOnInit() {
  }

}
