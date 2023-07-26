import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  loadingProducts: boolean = true;
  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;

  uri: string = "";

  total: number = 0;

  productList: any[] = [];
  buy:any[] = [];



  constructor(private http: HttpClient, private prodServ: ProductService) { }

  ngOnInit(): void {
    this.uri = this.prodServ.uri
    this.http.get<any[]>(this.uri + "/productos").subscribe(res => {
      this.loadingProducts = false;
      this.productList = res;
    }, err => {
      this.loadingProducts = false;
    })
  }

  add(product: any) {
    this.buy.push(product);
  }

  calculateTotal() {
    for (let detail of this.buy) {
      for (let product of this.productList) {
        if (detail.id_product==product.id_product) {
          this.total = this.total + product.price * detail.quantity;
        }
      }
    }
  }
  
  onSubmit() {
    this.loading = true;
    if (this.buy.length>0) {
      this.calculateTotal();
      this.http.post(this.uri + "/compra", {id_user: 1, total: this.total, buy: this.buy})
        .subscribe(res => {
          this.loading = false;
          this.success = true;
        }, err => {
          if (err.status==200) {
            this.loading = false;
            this.success = true;
          } else {
            this.loading = false;
            this.error = true;
          }
        })
    }
  }
}
