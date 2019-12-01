import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  @Input() product: Product;
  constructor(private service: StoreService) { }

  ngOnInit() {
  }

  addToCart() {
    this.service.getCart().subscribe(cart => {
      const tempProduct = {...this.product};
      let maxId = Math.max(...cart.map(product => product.id), 1);
      tempProduct.id = maxId + 1;
      this.service.addToCart(tempProduct).subscribe();
    });

  }

}
