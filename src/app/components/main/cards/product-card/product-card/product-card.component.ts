import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import {NgOptimizedImage} from "@angular/common";
;

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardModule, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ProductCardComponent {

}
