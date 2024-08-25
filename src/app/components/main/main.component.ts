import { Component } from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {CardsComponent} from "./cards/cards.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MenuComponent,
    CardsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
