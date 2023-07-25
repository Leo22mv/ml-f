import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;

  id: number = 0;

  uri: string = "";

  constructor(private prodServ: ProductService, private http: HttpClient) { }

  ngOnInit(): void {
    this.uri = this.prodServ.uri;
  }

  onSubmit() {
    this.loading = true;
    this.http.post(this.uri + "/productos/eliminar", this.id).subscribe(res => {
      this.loading = false;
      this.success = true;
    }, err => {
      this.loading = false;
      this.error = true;
    })
  }

}
