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

  uri: string = "";

  constructor(private prodServ: ProductService, private http: HttpClient) { }

  ngOnInit(): void {
    this.uri = this.prodServ.uri;
  }

  onSubmit() {
    this.loading = true;
    this.http.post(this.uri + "/productos/agregar", {name: this.name, description: "", urlPh: "", category: "", price: 0, stock: 0}).subscribe(res => {
      this.loading = false;
      this.success = true;
    }, err => {
      this.loading = false;
      this.error = true;
      console.log
    });
  }

}
