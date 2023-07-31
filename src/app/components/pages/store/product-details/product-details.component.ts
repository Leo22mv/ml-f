import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
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
    // ;

  productToAdd: any;
  quantity: number = 1;

  loading: boolean = true;
  error: boolean = false;

  btnClass: string = "btn btn-dark";

  constructor(private route: ActivatedRoute, private prodServ: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');

    // this.prodServ.getProducts().subscribe(res => {
    //   for (let product of res) {
    //     if (this.id==product.id_product) {
    //       this.loading = false;
    //       this.product = product;
    //     }
    //   }
    // }, err => {
    //   this.error = true;
    // })

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get('id');
        this.loading = true; // Show loading spinner while fetching data
        this.product = {};
        return this.prodServ.getProducts(); // Fetch the products
      })
    ).subscribe(
      (res) => {
        for (let product of res) {
          if (this.id == product.id_product) {
            this.loading = false;
            this.product = product;
            break; // Once found, break the loop.
          }
        }
      },
      (err) => {
        this.error = true;
        this.loading = false;
      }
    );
  }


  addToCart(prod: Product) {
    let existent: boolean = false;

    this.productToAdd = this.product;
    this.productToAdd.quantity = this.quantity;
    
    for (let product of this.cartService.cart) {
      if (product.id_product==prod.id_product) {
        product.quantity += prod.quantity;
        existent = true;
      }
    }

    if (!existent) {
      this.cartService.cart.push(prod);
    }

    this.btnClass = "btn btn-dark disabled";
  }

}
