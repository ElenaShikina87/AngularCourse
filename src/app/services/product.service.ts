import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../interface/product";
import {Observable} from "rxjs";
import { IProductsImages } from '../interface/image';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>('https://dummyjson.com/products')
  }
  getProductById(id:number): Observable<IProduct> {
    return this._http.get<IProduct>('https://dummyjson.com/products/' + id)
  }

  getProductImages() {
    return this._http.get('https://dummyjson.com/products/?&select=id,&select=images')
  }
}
