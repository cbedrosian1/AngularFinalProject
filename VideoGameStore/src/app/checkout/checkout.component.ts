import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Product } from '../shared/models/product.model';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { PhoneValidator } from '../shared/validators/phone-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  submitted: boolean;
  form: FormGroup;
  products: Product[];
  constructor(private service: StoreService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      addressOne: ['', [Validators.required]],
      addressTwo: '',
      state: ['GA', [Validators.required]],
      city: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      zipCode: ['', [Validators.required, Validators.pattern("^[0-9]{5}$")]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, PhoneValidator.phoneShouldBeValid.bind(this)]]
    });
    this.service.getCart().subscribe(cart => {
      this.products = cart;
    })
    this.submitted = false;
  }

  get fields() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.products.forEach(product => {
      this.service.deleteProduct(product).subscribe();
    })
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home']);
  }
}
