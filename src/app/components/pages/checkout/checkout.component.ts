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
  username: string | null = "";
  buy: any[] = [];

  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;

  btnClass: string = "btn btn-dark";

  constructor(public cartServ: CartService, private buyServ: BuyService) { }

  ngOnInit(): void {
    for (let product of this.cartServ.cart) {
      this.total += product.price * product.quantity;

      this.buy.push({id_product: product.id_product, quantity: product.quantity});
    }
    this.username = localStorage.getItem("Username");
  }

  onSubmit() {
    this.btnClass = "btn btn-dark disabled";
    this.loading = true;
    this.buyServ.buy({username: this.username, total: this.total, buy: this.buy}).subscribe(res => {
      this.loading = false;
      this.success = true;
    }, err => {
      this.loading = false;
      this.error = true;
    });
  }
}
