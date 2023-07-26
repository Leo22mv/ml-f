import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  loading: boolean = true;
  uri = "";

  productList: any = [];

  constructor(private http: HttpClient, private prodServ: ProductService) { }

  ngOnInit(): void {
    this.uri = this.prodServ.uri
    this.http.get<any[]>(this.uri + "/productos").subscribe(res => {
      this.loading = false;
      this.productList = res;
    }, err => {
      this.loading = false;
    })
  }

}
