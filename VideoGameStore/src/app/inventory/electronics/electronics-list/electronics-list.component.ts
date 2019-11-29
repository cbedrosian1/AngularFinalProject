import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-electronics-list',
  templateUrl: './electronics-list.component.html',
  styleUrls: ['./electronics-list.component.css']
})
export class ElectronicsListComponent implements OnInit {

  electronics: Product[];
  constructor(private service: StoreService) { }

  ngOnInit() {
    this.service.getElectronics().subscribe(electronics => {
      this.electronics = electronics;
    }
    );
  }

}
