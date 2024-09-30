import {Component, ViewEncapsulation} from '@angular/core';
import {Button} from "primeng/button";
import { ButtonModule } from 'primeng/button';
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    Button,
    ButtonModule,
    InputGroupModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  encapsulation: ViewEncapsulation.None,
})

export class MenuComponent {}
