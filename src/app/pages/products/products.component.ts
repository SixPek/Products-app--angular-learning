import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/models/product";
import {ProductService} from "../../shared/services/productService";

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];





  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => this.products = products
    });
  }

}
