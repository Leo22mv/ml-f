import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;

  name: string = "";
  description: string = "";
  urlPh: string = "";
  category: string = "";
  price: number = 0;
  stock: number = 0;

  uri: string = "";

  constructor(private prodServ: ProductService, private http: HttpClient) { }

  ngOnInit(): void {
    this.uri = this.prodServ.uri;
  }

  onSubmit() {
    this.loading = true;
    this.http.post(this.uri + "/productos/agregar", {name: this.name, description: this.description, urlPh: this.urlPh, category: this.category, price: this.price, stock: this.stock}).subscribe(res => {
      this.loading = false;
      this.success = true;
    }, err => {
      this.loading = false;
      this.error = true;
      console.log
    });
  }

}
