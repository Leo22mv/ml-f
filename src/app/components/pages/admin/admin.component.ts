import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private prServ: ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.prServ.addProduct({id: 1, name: "Leo", price: 20});
  }

}
