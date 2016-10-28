import { Component, OnInit }   from '@angular/core';

import { Product }             from './product';
import { ProductService }      from './product.service';

@Component({
  moduleId: module.id,
  selector:    'product-list',
  templateUrl: 'product-list.component.html',
  providers:  [ ProductService ]
})

export class ProductListComponent implements OnInit {
  errorMessage:string;
  products: Product[];
  mode = 'Observable';

  constructor (private productService: ProductService) {}

  ngOnInit() { this.getProducts(); }

  getProducts() {
    this.productService.getProducts().subscribe(
      products => this.products = products,
      error => this.errorMessage = <any>error);
  }
  
}