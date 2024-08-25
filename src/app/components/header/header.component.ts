import {Component, ViewEncapsulation} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Button,} from "primeng/button";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    Button
  ],

  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './header.component.css'

})

export class HeaderComponent {


}
