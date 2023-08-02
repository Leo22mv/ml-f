import { Component, OnInit } from '@angular/core';
import { BuyService } from 'src/app/services/buy.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total: number = 0;

  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;

  btnClass: string = "btn btn-dark";

  constructor(public cartServ: CartService, private buyServ: BuyService) { }

  ngOnInit(): void {
    for (let product of this.cartServ.cart) {
      this.total += product.price * product.quantity;
    }
  }

  onSubmit() {
    this.btnClass = "btn btn-dark disabled";
    this.loading = true;
    this.buyServ.buy({id_user: 1, total: this.total, buy: { id_product: 1, quantity: 1 }}).subscribe(res => {
      this.loading = false;
      this.success = true;
    }, err => {
      this.loading = false;
      this.error = true;
    });
  }
}
