import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselItems: Product[];
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getVideoGames().subscribe( games => {
      this.carouselItems = games.slice(0,3);
    }
    );
  }

}
