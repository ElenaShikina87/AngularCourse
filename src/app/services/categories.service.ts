import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environmentCategories} from "../../environments/environment";
import {ICategory} from "../interface/category";

const apiUrl = environmentCategories.apiUrl;
const apiKey = environmentCategories.apiKey

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private _http = inject(HttpClient)
  getCategories(){
    return this._http.get(`${apiUrl}?api_key=${apiKey}`)
  }

  constructor() { }
}
