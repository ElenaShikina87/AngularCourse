import {Component, inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { CardModule } from 'primeng/card';
import {NgOptimizedImage, SlicePipe} from "@angular/common";
import {CarlComponent} from "../carl/carl.component";
import {IProduct} from "../../interface/product";
import {RouterLink} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import { ProductService } from '../../services/product.service';
import { tap } from 'rxjs';
import { IProductImage } from '../../interface/image';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardModule, NgOptimizedImage, CarlComponent, SlicePipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductCardComponent{
  @Input() product!: IProduct
/* 
  constructor( private productService: ProductService){}


  images$: IProductImage[] = []
  
  ngOnInit() {
    this.productService.getProductImages().subscribe( (res) => {
      this.images$ = res.products
    } )
  }

  images = toSignal(this.images$) */



}
