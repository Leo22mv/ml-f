import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // uri: string = "http://localhost:8080";
  uri: string = "https://ml-b-s.azurewebsites.net";

  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get(this.uri + "/productos")
  }

  addProduct(prod: any) {
    this.http.post(this.uri + "/productos/agregar", prod).subscribe( res => {
      console.log(res)
    });
  }
}
