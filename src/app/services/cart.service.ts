import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [
    // {
    //   id_product: 4,
    //   name: "Banda de Konoha",
    //   description: "Banda usada por los ninjas de la aldea de la hoja en Naruto y Naruto Shippuden",
    //   urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
    //   category: "Accesorios",
    //   price: 3000,
    //   stock: 10,
    //   quantity: 1
    // }
  ];

  constructor() { }
}
