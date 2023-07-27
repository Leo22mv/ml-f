import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  loading: boolean = true;
  uri = "";

  productList: any = [
    {
      id: 1,
      name: "Sombrero de paja",
      description: "Sombrero usado por el protagonista Luffy en la historia de One Piece",
      urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
      category: "Accesorios",
      price: 5000,
      stock: 5
    },
    {
      id: 2,
      name: "Capa de Akatsuki",
      description: "Capa usada por la organización Akatsuki en Naruto y Naruto Shippuden",
      urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
      category: "Ropa",
      price: 8000,
      stock: 3
    },
    {
      id: 3,
      name: "Capa del cuerpo de exploración",
      description: "Capa usada por el equipo encargado de explorar fuera de las murallas en Shingeki no kyojin",
      urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
      category: "Ropa",
      price: 7000,
      stock: 4
    },
    {
      id: 4,
      name: "Banda de Konoha",
      description: "Banda usada por los ninjas de la aldea de la hoja en Naruto y Naruto Shippuden",
      urlPh: "../../../../../assets/img/png-transparent-computer-icons-badmintonclick-store-rectangle-logo-black.png",
      category: "Accesorios",
      price: 3000,
      stock: 10
    }
  ];

  totalProductList = [];

  constructor(private http: HttpClient, private prodServ: ProductService, public cartService: CartService) { }

  ngOnInit(): void {
    // this.uri = this.prodServ.uri
    // this.http.get<any[]>(this.uri + "/productos").subscribe(res => {
    //   this.loading = false;
    //   this.productList = res;
    // }, err => {
      this.loading = false;
    // })

    this.totalProductList = this.productList;
  }

  changeCategory(cat: any) {
    switch (cat) {
      case "Todas":
        this.productList = this.totalProductList;
        break

      case "Ropa":
        this.productList = this.totalProductList.filter((product: any) => product.category=="Ropa");
        break

        case "Accesorios":
          this.productList = this.totalProductList.filter((product: any) => product.category=="Accesorios");
          break
    }
  }

  order(order: string) {
      switch (order) {
        case "Precio (ascendente)":
          this.productList = this.productList.sort((a: any, b: any) => {
          if (a.price < b.price) {
            return -1;
          } else if (a.price > b.price){
            return 1;
          }
          return 0;
        })
        // console.log(this.productList)
        break
  
        case "Precio (descendente)":
          this.productList = this.productList.sort((a: any, b: any) => {
          if (a.price < b.price) {
            return 1;
          } else if (a.price > b.price){
            return -1;
          }
          return 0;
        })
        break
      }
  }

  addToCart(prod: Product) {
    let existent: boolean = false;

    for (let product of this.cartService.cart) {
      if (product.id==prod.id) {
        // console.log(product.quantity)
        product.quantity += prod.quantity;
        // console.log(product.quantity)
        existent = true;
      }
    }

    if (!existent) {
      this.cartService.cart.push(prod);
    }
  }
}
