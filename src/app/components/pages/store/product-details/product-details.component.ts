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
  product: any
    // = {
    //   id_product: 1,
    //   name: "Sombrero de paja",
    //   description: "Sombrero usado por el protagonista Luffy en la historia de One Piece",
    //   urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
    //   category: "Accesorios",
    //   price: 5000,
    //   stock: 5
    // }
    ;

  loading: boolean = true;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private prodServ: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.prodServ.getProducts().subscribe(res => {
      for (let product of res) {
        if (this.id==product.id_product) {
          this.loading = false;
          this.product = product;
        }
      }
    }, err => {
      this.error = true;
    })
  }

}
