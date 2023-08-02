import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total: number = 0;

  constructor(public cartServ: CartService) { }

  ngOnInit(): void {
    for (let product of this.cartServ.cart) {
      this.total += product.price * product.quantity;
    }
  }

}
