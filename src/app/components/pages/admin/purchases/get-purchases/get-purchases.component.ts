import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BuyService } from 'src/app/services/buy.service';
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

  constructor(private http: HttpClient, private buyServ: BuyService) { }

  ngOnInit(): void {
    this.uri = this.buyServ.uri;
    this.buyServ.getBuys()    
    .subscribe(res => {
      this.loading = false;
      this.purchasesList = res;
      console.log(this.purchasesList)
    }, err => {
      this.loading = false;
    })
  }

}
