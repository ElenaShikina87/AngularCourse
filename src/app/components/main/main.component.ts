import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {ProductCardComponent} from "../product-card/product-card.component";
import {IProduct} from "../../interface/product";
import {ProductService} from "../../services/product.service";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MenuComponent,
    ProductCardComponent,
    NgForOf,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  data: any | IProduct[]

  constructor(private _productService: ProductService,) {}
  ngOnInit() {
    this._productService.getProducts().subscribe(
      response => {
        this.data = response;
      }
    )
  }
}
