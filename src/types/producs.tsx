export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ApiResponse {
  sucess: boolean;
  products: Product[];
}
