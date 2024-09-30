import {Component, computed, effect, Inject, Input, input, OnInit, signal} from '@angular/core';
import {NgStyle} from "@angular/common";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../interface/product";
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { IProductImage } from '../../interface/image';



@Component({
  selector: 'app-carl',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './carl.component.html',
  styleUrl: './carl.component.css',
})
export class CarlComponent{

  images = input.required<IProductImage[] | undefined>()

  currentImage = signal<IProductImage | null>(null)

  constructor() {
    effect( () => {
      const images = this.images()
      if ( images && images.length > 0) {
        this.currentImage!.set(images[0])
      }
    }, {allowSignalWrites: true} )
  }

  mainImageUrl = computed(() => {
    return {
      backgroundImage: `url(${this.currentImage()?.images[0]})`,
    }
  })

  setCurrentImage(image: IProductImage): void {
  this.currentImage.set(image)
  console.log(image)
  }

  setFirstImage() {
    const images = this.images()
    if ( images && images.length > 0) {
      this.currentImage.set(images[0])
    }
  }

}
