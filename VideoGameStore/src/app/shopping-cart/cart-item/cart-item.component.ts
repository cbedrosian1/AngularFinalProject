import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { FormControl, Validators, Form, FormGroup, FormBuilder } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product;
  totalPrice: number;
  innerWidth: number;
  form: FormGroup;
  oldValue: number;
  constructor(private service: StoreService, private fb: FormBuilder) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.totalPrice = this.product.price;
    this.form = this.fb.group({
      quantity: [this.product.quantity, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });

    this.form
      .controls['quantity']
      .valueChanges
      .subscribe(selectedValue => {
        console.log(this.form.value['quantity'])
        this.oldValue = this.form.value['quantity'];
        this.validateQuantity(this.oldValue);
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  get fields() { return this.form.controls; }

  validateQuantity(qty: number) {
    if (isNaN(+this.fields.quantity.value)) {
      this.fields.quantity.setValue(this.oldValue);
    }
  }
  decrementQuantity() {
    let tempQty = this.fields.quantity.value;
    this.validateQuantity(tempQty);
    if (this.fields.quantity.value < 2) {
      this.fields.quantity.setValue(1);
    } else {
      this.fields.quantity.setValue(+tempQty - 1);
    }
    this.totalPrice = this.fields.quantity.value * this.product.price;
    this.product.quantity = this.fields.quantity.value;
    this.service.updateProductQuantity(this.product).subscribe();

   }

  incrementQuantity() {
    let tempQty = this.fields.quantity.value;
    this.validateQuantity(tempQty);
    this.fields.quantity.setValue(+tempQty + 1);
    this.totalPrice = this.fields.quantity.value * this.product.price;
    this.product.quantity = this.fields.quantity.value;
    this.service.updateProductQuantity(this.product).subscribe();
  }
}
