import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: any;
  @Output() emitter: EventEmitter<any> = new EventEmitter<any>()

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeProduct() {
	for (let i = 0; i < this.cartService.cart.length; i++) {
	  if (this.cartService.cart[i].id_product === this.product.id_product) {
		this.cartService.cart.splice(i, 1);
		this.emitter.emit();
		break; // ¡Importante! Usar break para salir del bucle después de eliminar el producto
	  }
	}
  }
  
}
