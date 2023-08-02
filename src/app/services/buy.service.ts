import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  uri: string = "";

  constructor(private http: HttpClient) { }

  buy(buy: any): Observable<any> {
    return this.http.post(this.uri + "/compra", buy)
  }
}
