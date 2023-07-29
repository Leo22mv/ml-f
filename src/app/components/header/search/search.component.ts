import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  // // Método para buscar productos en el array local
  // searchProducts(query: string) {
  //   query = query.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios en blanco
  //   // Filtrar productos que coincidan con la búsqueda (puedes ajustar el criterio de búsqueda según tus necesidades)
  //   return this.products.filter(product =>
  //     product.name.toLowerCase().includes(query) // Filtrar por nombre del producto
  //     // Puedes agregar más condiciones aquí para filtrar por otras propiedades del producto
  //     product.description.toLowerCase().includes(query)
  //   );
  // }

  onSubmit() {
    console.log(this.search)
    let query: string = this.search.toLowerCase().trim()
    console.log(query)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        busqueda: query
      }
    }
    this.router.navigate(["/buscar"], navigationExtras)
  }

}
