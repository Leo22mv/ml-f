import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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

  total: number = 0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.calculateTotal();
  }

  voidCart(): boolean {
    return this.cart.length<=0
  }

  calculateTotal() {
    this.total = 0
    for (let product of this.cart) {
      this.total += product.price * product.quantity;
    }
  }

  updateTotal() {
    this.cart = this.cartService.cart;
    this.calculateTotal();
  }
}
