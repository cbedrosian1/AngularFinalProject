import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { AppComponent } from 'src/app/app.component';
import { StoreService } from 'src/app/services/store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {

  @Input() productToView: Product;
  cart: Product[];
  constructor(private service: StoreService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.service.getCart().subscribe(cart => {
      this.cart = cart;
      const tempProduct = {...product};
      let maxId = Math.max(...cart.map(product => product.id), 1);
      tempProduct.id = maxId + 1;
      this.service.addToCart(tempProduct).subscribe();
    });
  }
}
