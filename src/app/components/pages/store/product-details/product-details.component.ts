import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  product: any;

  constructor(private route: ActivatedRoute, private prodServ: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.prodServ.getProducts().subscribe(res => {
      for (let product of res) {
        if (this.id==product.id_product) {
          this.product = product;
        }
      }
    })
  }

}
