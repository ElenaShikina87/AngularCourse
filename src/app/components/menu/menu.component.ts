import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {Button} from "primeng/button";
import { ButtonModule } from 'primeng/button';
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import { FormsModule } from '@angular/forms';
import {TieredMenuModule} from "primeng/tieredmenu";
import {CategoriesComponent} from "../categories/categories/categories.component";
import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {OverlayPanel} from "primeng/overlaypanel";



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    Button,
    ButtonModule,
    InputGroupModule,
    InputTextModule,
    FormsModule,
    TieredMenuModule,
    CategoriesComponent,
    ClickOutsideDirective,

  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  encapsulation: ViewEncapsulation.None,
})

export class MenuComponent {
  placeholder="Поиск по объявлениям"
  @ViewChild('categories') categories!: OverlayPanel

  clickedOutside(){
    this.categories.hide();
  }


}
