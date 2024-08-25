import {Component, ViewEncapsulation} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Button} from "primeng/button";
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'categories-component',

  standalone: true,
  imports: [
    NgOptimizedImage,
    Button,
    ButtonModule
  ],

  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CategoriesComponent {
}
