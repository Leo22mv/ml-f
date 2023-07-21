import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get(this.uri + "/get").subscribe( res => {
      console.log(res);
    })
  }

  addProduct(prod: any) {
    this.http.post(this.uri + "/add", prod).subscribe( res => {
      console.log(res)
    });
  }
}
