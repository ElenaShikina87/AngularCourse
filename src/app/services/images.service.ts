import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IImage} from "../interface/image";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
   constructor(private _http: HttpClient) { }
   getImages(){
     return this._http.get<IImage[]>('https://api.escuelajs.co/api/v1/products')
   }
/*  @Input() product!: IProduct

  getImages() {
    return this.product.images;
  }*/
}
