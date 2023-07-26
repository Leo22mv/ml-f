import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    // Obtener información del usuario y su rol del Local Storage o del servicio compartido
    const userRole: any = localStorage.getItem("role")

    // // Verificar si el usuario tiene el rol necesario para acceder a la ruta
    // const requiredRoles = next.data["requiredRole"];
    // if (userRole === requiredRole) {
    //   return true;
    // } else {
    //   // Redirigir a una página de acceso denegado o a la página de inicio de sesión
    //   // console.log(userRole)
    //   return this.router.parseUrl('/access-denied');
    // }

    // Verificar si el usuario tiene alguno de los roles necesarios para acceder a la ruta
    const requiredRoles: string[] = next.data["requiredRoles"]; // Utilizar notación de corchetes
    // const intersection = userRoles.filter(role => requiredRoles.includes(role));
    
    // if (intersection.length > 0) {
    // if (userRole) {
      if (requiredRoles.includes(userRole)) {
        return true;
      } else {
        // Redirigir a una página de acceso denegado o a la página de inicio de sesión
        return this.router.parseUrl('/inicio');
      }
    // }
  }
}
