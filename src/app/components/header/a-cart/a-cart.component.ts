import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-a-cart',
  templateUrl: './a-cart.component.html',
  styleUrls: ['./a-cart.component.css']
})
export class ACartComponent implements OnInit {

  

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    
  }

}
