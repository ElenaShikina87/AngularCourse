import { Component } from '@angular/core';
import {ProductCardComponent} from "./product-card/product-card/product-card.component";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
