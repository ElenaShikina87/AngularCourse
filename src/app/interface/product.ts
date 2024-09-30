export interface IProduct {
  id:string,
  title:string,
  description: string,
  category:string,
  price:number,
  brand:string,
  meta:{
    createdAt:string,
    updatedAt:string,
    barcode:string,
    qrCode:string},
  thumbnail:string,
  images: string[],
}
