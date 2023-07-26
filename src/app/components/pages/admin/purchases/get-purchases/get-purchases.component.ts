import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-get-purchases',
  templateUrl: './get-purchases.component.html',
  styleUrls: ['./get-purchases.component.css']
})
export class GetPurchasesComponent implements OnInit {

  loading: boolean = true;
  uri = "";

  purchasesList: any = [];

  detailsRoute: string | undefined;

  constructor(private http: HttpClient, private prodServ: ProductService) { }

  ngOnInit(): void {
    this.uri = this.prodServ.uri
    this.http.get<any[]>(this.uri + "/compras").subscribe(res => {
      this.loading = false;
      this.purchasesList = res;
      console.log(this.purchasesList)
    }, err => {
      this.loading = false;
    })
  }

}
