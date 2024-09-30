import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProductImage } from '../../interface/image';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-carousel-main',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './carousel-main.component.html',
  styleUrl: './carousel-main.component.css'
})
export class CarouselMainComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductImages().subscribe((images) => {
            this.images = images as any;
        });
    }


}
