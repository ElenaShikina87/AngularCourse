import {Component, inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MegaMenuModule} from "primeng/megamenu";
import {TieredMenuModule} from "primeng/tieredmenu";
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {Button} from "primeng/button";
import {CategoriesService} from "../../../services/categories.service";





@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MegaMenuModule, TieredMenuModule, OverlayPanelModule, Button],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent implements OnInit {

  private categoriesService = inject(CategoriesService);
  /* items: MegaMenuItem[] | undefined */

  items: string[] = []

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((response: any)=> {
        this.items = response;
        console.log(this.items)
      })
  }

  /*this.items = [
      {
        label: 'Furniture',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Living Room',
              items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
            }
          ],
          [
            {
              label: 'Kitchen',
              items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
            },
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories' }]
            }
          ],
          [
            {
              label: 'Bedroom',
              items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
            }
          ],
          [
            {
              label: 'Office',
              items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
            }
          ]
        ]
      },
      {
        label: 'Electronics',
        icon: 'pi pi-mobile',
        items: [
          [
            {
              label: 'Computer',
              items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
            }
          ],
          [
            {
              label: 'Home Theather',
              items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
            }
          ],
          [
            {
              label: 'Gaming',
              items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
            }
          ],
          [
            {
              label: 'Appliances',
              items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
            }
          ]
        ]
      },
      {
        label: 'Sports',
        icon: 'pi pi-clock',
        items: [
          [
            {
              label: 'Football',
              items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
            }
          ],
          [
            {
              label: 'Running',
              items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
            }
          ],
          [
            {
              label: 'Swimming',
              items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
            }
          ],
          [
            {
              label: 'Tennis',
              items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
            }
          ]
        ]
      }
    ]
}
*/
  loadCategories() {

  }

  icon1 = document.getElementById('icon1')
  icon2 = document.getElementById('icon2')
  hidden = 'hidden';
  display = 'show';
  changeIcon() {
      if (this.icon1!.classList.contains('hidden')) {
      this.icon1!.classList.add(this.display);
      this.icon1!.classList.remove(this.hidden);
      this.icon2!.classList.add(this.hidden);
      this.icon2!.classList.remove(this.display);
    } else {
      this.icon2!.classList.add(this.display);
      this.icon2!.classList.remove(this.hidden);
      this.icon1!.classList.add(this.hidden);
      this.icon1!.classList.remove(this.display);
    }
    }

  setPrimaryIcon() {
    this.icon2!.classList.add(this.display);
      this.icon2!.classList.remove(this.hidden);
      this.icon1!.classList.add(this.hidden);
      this.icon1!.classList.remove(this.display);
  }

  menublock = document.getElementById('menublock')
}

