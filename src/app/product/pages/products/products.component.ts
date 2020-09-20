import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/shared/models/product';
import {ProductService} from "src/app/core/services/productService";

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  filteredProducts: Product[];
  searchKey: string = "";

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      //next: products => this.products = products.filter(product => product.id === 1)
      next: p => {this.products = p; this.filteredProducts = p}
    });
  }
  filterProducts($event){
    this.searchKey = $event.target.value;
    this.filteredProducts = this.products.filter(x=>x.title.indexOf(this.searchKey) >= 0);
  }

}
