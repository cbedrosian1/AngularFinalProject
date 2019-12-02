import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-video-games-list',
  templateUrl: './video-games-list.component.html',
  styleUrls: ['./video-games-list.component.css']
})
export class VideoGamesListComponent implements OnInit {

  videoGames: Product[];
  constructor(private service: StoreService) { }

  ngOnInit() {
    this.service.getVideoGames().subscribe(games => {
      this.videoGames = games;
    }
    );
  }

}
