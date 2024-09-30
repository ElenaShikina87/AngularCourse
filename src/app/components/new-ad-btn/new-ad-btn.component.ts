import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-ad-btn',
  standalone: true,
  imports: [],
  templateUrl: './new-ad-btn.component.html',
  styleUrl: './new-ad-btn.component.css'
})
export class NewAdBtnComponent {
  constructor(private _router: Router) {}
  btnClick(): void {
    this._router.navigate(['/app-new-ad']).then();
  }
}
