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

  onSubmit(id: number) {
    this.loading = true;
    this.success = false;
    this.error = false;
    
    const url = `${this.uri}/productos/${id}`;
  
    this.http.delete(url).subscribe(
      res => {
        // console.log(res);
        this.loading = false;
        this.success = true;
      },
      err => {
        // console.log(err);
        if (err.status==200) {
          this.loading = false;
          this.success = true;
        } else {
          this.loading = false;
          this.error = true;
        }
      }
    );
  }
}
