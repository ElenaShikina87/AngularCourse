import {Component, ViewEncapsulation} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Button} from "primeng/button";

import {AuthButtonComponent} from "./auth-button/auth-button.component";
import {NewAdButtonComponent} from "./new-ad-button/new-ad-button.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    Button,
    AuthButtonComponent,
    NewAdButtonComponent
  ],

  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrl: './header.component.css'

})

export class HeaderComponent {


}
