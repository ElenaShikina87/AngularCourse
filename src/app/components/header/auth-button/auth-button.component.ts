import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Button} from "primeng/button";
import {NgForOf, NgIf} from "@angular/common";
import {ClickOutsideDirective} from "../../../directives/click-outside.directive";
import {Router, RouterLink} from "@angular/router";
import {TieredMenuModule} from "primeng/tieredmenu";
import {MenuItem} from "primeng/api";
import {Menu} from "primeng/menu";
import { LoginComponent } from "../../../pages/modal/login/login.component";



@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [
    Button,
    NgIf,
    ClickOutsideDirective,
    RouterLink,
    NgForOf,
    TieredMenuModule,
    LoginComponent
],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: []
})

export class AuthButtonComponent implements OnInit {
  isAuthorized: boolean = false;

  @ViewChild('menu') menu!:  Menu;
  toggleMenu()
  {
    this.menu.show('click');
  }

  clickedOutside(){
    this.menu.hide();
  }

  constructor(private router: Router) {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Мои объявления',
        command: () => {
          this.router.navigate(['/app-my-ad']).then()}
      },
      {
        label: 'Настройки',
        route: '/app-new-ad'
      },
      {
        badge: 'Выход',
        badgeStyleClass: 'exit',
        command:()=> {
          this.isAuthorized = false
        }
      },
    ]
  }
}


/*

  items = [
    {
      name: 'Мои объявления',
      routerLink: 'app-new-ad'
    },
    {
      name: 'Настройки',
      routerLink: 'app-new-ad'
    },
    {
      name: 'Выход',
      routerLink: 'app-new-ad'
    },
  ]

  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  clickedOutside(){
    this.isMenuOpen = false;
  }

*/

