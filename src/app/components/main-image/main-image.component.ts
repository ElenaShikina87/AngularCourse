import {Component, computed, input} from '@angular/core';
import { NgStyle } from '@angular/common';
import {IImage} from "../../interface/image";

@Component({
  selector: 'app-main-image',
  standalone: true,
  imports: [],
  templateUrl: './main-image.component.html',
  styleUrl: './main-image.component.css'
})
export class MainImageComponent {
  image = input.required<IImage>()
  backgroundUrl = computed(
    () => {
      return {backgroundImage: `url(${this.image}).url`};
    }
  )

}
