import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  quantity: number | undefined;
  @Output() emmiter: EventEmitter<any> = new EventEmitter();

  added: boolean = false;

  btnClass: string = "btn btn-dark btn-sm";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.quantity&&this.quantity>0) {
      this.btnClass = "btn btn-dark btn-sm disabled";
      this.added = true;
      this.emmiter.emit({id_product: this.product.id_product, quantity: this.quantity});
    }
  }

}
