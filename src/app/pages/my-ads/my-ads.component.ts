import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {NewAdBtnComponent} from "../../components/new-ad-btn/new-ad-btn.component";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-my-ads',
  standalone: true,
  imports: [
    MenuComponent,
    ProductCardComponent,
    NewAdBtnComponent,
    HeaderComponent
  ],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.css'
})
export class MyAdsComponent {

}
