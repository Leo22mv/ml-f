import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[] = [];

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
    for (let product of this.cart) {
      this.total += product.price * product.quantity;
    }
  }

}
