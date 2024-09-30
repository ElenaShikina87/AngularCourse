import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {NewAdFormComponent} from "../../components/new-ad-form/new-ad-form.component";
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
  selector: 'app-new-ad',
  standalone: true,
  imports: [
    HeaderComponent,
    NewAdFormComponent,
    MenuComponent
  ],
  templateUrl: './new-ad.component.html',
  styleUrl: './new-ad.component.css'
})
export class NewAdComponent {

}
