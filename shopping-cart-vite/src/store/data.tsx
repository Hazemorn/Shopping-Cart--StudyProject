//mock-data
export interface IProduct {
  id: number;
  img: string;
  name: string;
  quantity: number;
  maxQuantity: number;
  price: number;
  totalPrice: number;
}

export const products: IProduct[] = [
  {
    id: 1,
    img: "../../public/macbook.png",
    name: "Apple MacBook Air 13",
    quantity: 1,
    maxQuantity: 12,
    price: 5000,
    totalPrice: 5000,
  },
  {
    id: 2,
    img: "../../public/appleWatch.png",
    name: "Apple watch",
    quantity: 1,
    maxQuantity: 70,
    price: 800,
    totalPrice: 800,
  },
  {
    id: 3,
    img: "../../public/macPro.png",
    name: "Mac Pro",
    quantity: 1,
    maxQuantity: 40,
    price: 7000,
    totalPrice: 7000,
  },
];
