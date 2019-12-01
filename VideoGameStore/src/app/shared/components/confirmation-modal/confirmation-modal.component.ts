import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  
  @Input() product: Product;
  constructor(private service: StoreService, private router: Router) { }

  ngOnInit() {
  }

  deleteFromCart() {
    this.service.deleteProduct(this.product).subscribe(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/shopping-cart']);
    });;
  }

}
