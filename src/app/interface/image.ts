/* export interface IImage {
  images: string[];
} */

export interface IProductsImages {
  products: IProductImage[];
  total:    number;
  skip:     number;
  limit:    number;
}

export interface IProductImage {
  id:     number;
  images: string[];
}
