import { Injectable } from "@angular/core";
import {Product} from "../../shared/models/product";
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProductDetailsComponent } from 'src/app/product/pages/product-details/product-details.component';


@Injectable({
    providedIn: 'root'
})

export class ProductService{
    products: Product [] = [];
    dataUrl = ""

    private readonly _http : HttpClient;


    constructor(private http: HttpClient) {
        this._http = http;
    }

    getProducts() : Observable<Product[]>{
        return this._http.get<Product[]>('../../../assets/productList.json');
    }

       getProductById(id:number){
        product:Product;
        this._http.get<Product[]>('../../../assets/productList.json').subscribe({
            next: p => {this.products = p}
        });
        
         return this.products.find(x=>x.id == id);
    }
}