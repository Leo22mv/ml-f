import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  results: any = 0;

  productList: any[] = [];
  totalProductList: any = [
    // {
    //   id_product: 1,
    //   name: "Sombrero de paja",
    //   description: "Sombrero usado por el protagonista Luffy en la historia de One Piece",
    //   urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
    //   category: "Accesorios",
    //   price: 5000,
    //   stock: 5
    // },
    // {
    //   id_product: 2,
    //   name: "Capa de Akatsuki",
    //   description: "Capa usada por la organización Akatsuki en Naruto y Naruto Shippuden",
    //   urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
    //   category: "Ropa",
    //   price: 8000,
    //   stock: 3
    // },
    // {
    //   id_product: 3,
    //   name: "Capa del cuerpo de exploración",
    //   description: "Capa usada por el equipo encargado de explorar fuera de las murallas en Shingeki no kyojin",
    //   urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
    //   category: "Ropa",
    //   price: 7000,
    //   stock: 4
    // },
    // {
    //   id_product: 4,
    //   name: "Banda de Konoha",
    //   description: "Banda usada por los ninjas de la aldea de la hoja en Naruto y Naruto Shippuden",
    //   urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
    //   category: "Accesorios",
    //   price: 3000,
    //   stock: 10
    // }
  ];

  loading: boolean = true;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private prodServ: ProductService, private cartServ: CartService) { }

  ngOnInit(): void {


    this.prodServ.getProducts().subscribe(res => {
      this.loading = false;
      this.totalProductList = res;

      this.route.queryParams.subscribe(params => {this.productList = this.totalProductList.filter((product: any) => {
        return (product.name.toLowerCase().includes(params["busqueda"])
        ||product.description.toLowerCase().includes(params["busqueda"])
        ||product.category.toLowerCase().includes(params["busqueda"])
        // ||product.price.includes(params["busqueda"])
        )})
        this.results = this.productList.length});
        for (let prod of this.cartServ.cart) {
          for (let product of this.productList) {
            if (prod.id_product==product.id_product) {
              product.stock -= prod.quantity;
            }
          }
        }
    }, err => {
      this.loading = false;
      this.error = true;
    })
  }


  addToCart(prod: Product) {
    let existent: boolean = false;
    
    for (let product of this.cartServ.cart) {
      if (product.id_product==prod.id_product) {
        // console.log(product.quantity)
        product.quantity += prod.quantity;
        // console.log(product.quantity)
        existent = true;
      }
      // console.log(product.quantity)
    }

    if (!existent) {
      this.cartServ.cart.push(prod);
    }
  }
}
