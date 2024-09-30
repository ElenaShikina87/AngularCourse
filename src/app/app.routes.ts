import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NewAdComponent} from "./pages/new-ad/new-ad.component";
import {MyAdsComponent} from "./pages/my-ads/my-ads.component";
import {ProductComponent} from "./pages/product/product.component";


export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then ( 
      (c) => c.HomeComponent
    ),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/modal/login/login.component').then(
          (c) => c.LoginComponent
        )
      }
    ]
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'app-new-ad',
    component: NewAdComponent,
  },

  {
    path: 'app-my-ad',
    component: MyAdsComponent,
  },

  {
    path: 'app-product/:productId',
    component: ProductComponent,
  },

];
