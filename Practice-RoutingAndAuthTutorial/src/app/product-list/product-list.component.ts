import { Component, OnInit }   from '@angular/core';

import { Product }             from './product';
import { ProductService }      from './product.service';
import { AuthService }          from '../auth/auth.service';

@Component({
  selector:    'product-list',
  templateUrl: 'product-list.component.html',
  providers:  [ ProductService, AuthService ]
})

export class ProductListComponent implements OnInit {
  errorMessage:string;
  products: Product[];
  mode = 'Observable';

  constructor (
    private productService: ProductService,
    private authService: AuthService) {}

  ngOnInit() { this.getProducts(); }

  getProducts() {
    this.productService.getProducts().subscribe(
      products => this.products = products,
      error => this.errorMessage = <any>error);
  }
  
}