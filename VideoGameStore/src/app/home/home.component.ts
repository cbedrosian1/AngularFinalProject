import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../shared/models/video-game.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselItems: VideoGame[];
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getVideoGames().subscribe( games => {
      this.carouselItems = games.slice(0,3);
    }
    );
  }

}
