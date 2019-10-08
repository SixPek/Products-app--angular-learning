import { Injectable } from "@angular/core";
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ProductService{
    products: Product [];
    dataUrl = ""

    private readonly _http : HttpClient;


    constructor(private http: HttpClient) {
        this._http = http;
    }

    getProducts() : Observable<Product[]>{
        return this._http.get<Product[]>('../../../assets/productList.json');
    }
}