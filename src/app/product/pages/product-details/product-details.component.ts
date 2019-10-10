import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/productService';
import { Product } from 'src/app/shared/models/product';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService, private router : Router) {
   
   }

  ngOnInit() {
    const id:number = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
    console.log(this.product);
  }

  BackToProducts(){
    console.log("AAA");
    this.router.navigate(['/products']);
  }




}
