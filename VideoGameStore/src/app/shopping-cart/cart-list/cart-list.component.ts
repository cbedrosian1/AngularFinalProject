import { Component, OnInit, HostListener } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Product[];
  innerWidth: number;
  constructor(private service: StoreService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.service.getCart().subscribe(items => {
      this.cartItems = items;
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
