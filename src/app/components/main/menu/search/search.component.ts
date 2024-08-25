import { Component, ViewEncapsulation } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [InputGroupModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent {

}
