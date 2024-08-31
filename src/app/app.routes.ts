import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {CardsComponent} from "./components/main/cards/cards.component";
import {MenuComponent} from "./components/main/menu/menu.component";
import {MainComponent} from "./components/main/main.component";


export const routes: Routes = [

  {
    path: 'app-component',
    component: AppComponent,
  },

  {
    path: 'header',
    component: HeaderComponent,
  },

  {
    path: 'cards',
    component: CardsComponent,
  },

  {
    path: 'menu',
    component: MenuComponent
  },

  {
    path: 'main',
    component: MainComponent
  },

];
