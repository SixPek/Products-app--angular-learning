import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : Product;

  @Input() inputId;
  @Input() inputTitle;
  @Input() inputDescription;
  @Input() inputPrice;
  constructor() {
  
   }

  ngOnInit() {
    this.product = new Product(this.inputTitle, this.inputDescription, this.inputPrice);
    console.log(this.product);
  }

}
