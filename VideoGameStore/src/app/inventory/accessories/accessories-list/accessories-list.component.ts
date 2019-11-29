import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-accessories-list',
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.css']
})
export class AccessoriesListComponent implements OnInit {

  accessories: Product[];
  constructor(private service: StoreService) { }

  ngOnInit() {
    this.service.getAccessories().subscribe(accessories => {
      this.accessories = accessories;
    }
    );
  }

}
