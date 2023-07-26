import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string | null = "";

  detailsList: any[] = [];

  uri: string | undefined;

  constructor(private route: ActivatedRoute, private prodServ: ProductService, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.uri = this.prodServ.uri + "/compras/" + this.id;
    this.http.get<any[]>(this.uri).subscribe(res => {
      this.detailsList = res;
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

}
