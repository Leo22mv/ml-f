import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css']
})
export class StoreProductComponent implements OnInit {

  @Input() product: any;
  @Output() emitter: EventEmitter<Product> = new EventEmitter<Product>()

  productToEmit: Product = {
    id: 0,
    name: "",
    description: "",
    urlPh: "",
    category: "",
    price: 0,
    stock: 0,
    quantity: 0
};

  quantity: number = 1;

  success: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.productToEmit = this.product;
    this.productToEmit.quantity = 1;
    console.log(this.productToEmit)
    if (this.quantity>1) {
      this.productToEmit.quantity = this.quantity;
    }

    // console.log(this.productToEmit);

    this.success = true;
    this.product.stock = this.product.stock - this.quantity;

    this.emitter.emit(this.productToEmit);

    this.quantity = 1;

    // console.log(this.productToEmit)
  }
}
