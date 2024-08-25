import {Component, OnInit} from '@angular/core';
import {CategoriesComponent} from "./categories/categories.component";
import {SearchComponent} from "./search/search.component";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CategoriesComponent,
    SearchComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {}
