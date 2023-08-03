import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  uri: string = "https://ml-b-n.onrender.com";

  constructor(private http: HttpClient) { }

  buy(buy: any): Observable<any> {
    return this.http.post<any>(this.uri + "/compra", buy)
  }

  getBuys() {
    return this.http.get<any[]>(this.uri + "/compras")
  }
}
