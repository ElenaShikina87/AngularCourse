import {Component, ViewEncapsulation} from '@angular/core';
import {Button} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-new-ad-button',
  standalone: true,
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './new-ad-button.component.html',
  styleUrl: './new-ad-button.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NewAdButtonComponent {

}
