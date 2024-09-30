import {Component, OnInit, signal} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {MenuComponent} from "../../components/menu/menu.component";
import {CarlComponent} from "../../components/carl/carl.component";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../interface/product";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuComponent,
    CarlComponent,
    NgClass
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  productData!: IProduct

  constructor(private _productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let productId = this.activatedRoute.snapshot.params['productId'];
    productId && this._productService.getProductById(productId).subscribe(
      (response: IProduct) => {
        this.productData = response;
      }
    )
  }

  isPhoneHidden = signal(true)
  showPhone() {
    this.isPhoneHidden.set(!this.isPhoneHidden);
  }

  
}
