import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged: string | null = localStorage.getItem("token");

  search: string = "";

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // // Inicializar la propiedad 'logged' con el valor actual del token
    // this.logged = localStorage.getItem('token');

    // // Crear un Observable que escuche los cambios en el localStorage para el 'token'
    // const tokenObservable: Observable<string> = new Observable((observer) => {
    //   const tokenChangeHandler = (event: StorageEvent) => {
    //     if (event.key === 'token') {
    //       observer.next(event.newValue); // Emitir el nuevo valor del token
    //     }
    //   };

    //   // Suscribirse al evento de cambios en el 'localStorage'
    //   window.addEventListener('storage', tokenChangeHandler);

    //   // Cuando el componente se destruya, remover la suscripción al evento
    //   return () => {
    //     window.removeEventListener('storage', tokenChangeHandler);
    //   };
    // });

    // // Suscribirse al Observable para recibir los cambios en el token y actualizar la propiedad 'logged'
    // tokenObservable.subscribe((newToken) => {
    //   this.logged = newToken;
    // });


    // Escuchar el evento de cambio en el localStorage
    // window.addEventListener('storage', this.updateLoggedValue.bind(this));


    // console.log(this.auth.admin);
  }

  // updateLoggedValue(event: StorageEvent) {
  //   if (event.key === "token") {
  //     this.logged = event.newValue; // Actualizar el valor de 'logged' cuando cambie el token en el localStorage
  //   }
  // }

  onSubmit() {
    alert("yeia")
  }
}
