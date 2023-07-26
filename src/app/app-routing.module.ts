import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { StoreComponent } from './components/pages/store/store.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { ProductsComponent } from './components/pages/admin/products/products.component';
import { GetComponent } from './components/pages/admin/products/get/get.component';
import { AddComponent } from './components/pages/admin/products/add/add.component';
import { DeleteComponent } from './components/pages/admin/products/delete/delete.component';
import { GetUsersComponent } from './components/pages/admin/users/get-users/get-users.component';
import { PurchasesComponent } from './components/pages/admin/purchases/purchases.component';
import { GetPurchasesComponent } from './components/pages/admin/purchases/get-purchases/get-purchases.component';
import { AddPurchaseComponent } from './components/pages/admin/purchases/add-purchase/add-purchase.component';
import { DetailsComponent } from './components/pages/admin/purchases/get-purchases/details/details.component';

const routes: Routes = [
  {path: "iniciar-sesion", component: LoginComponent},
  {path: "registrarse", component: RegisterComponent},
  {path: "admin", component: AdminComponent, children: [
    {path: "compras", component: PurchasesComponent, children: [
      {path: "ver/:id", component: DetailsComponent},
      {path: "ver", component: GetPurchasesComponent},
      {path: "agregar", component: AddPurchaseComponent}
    ]},
    {path: "productos", component: ProductsComponent, children: [
      {path: "eliminar", component: DeleteComponent},
      {path: "ver", component: GetComponent},
      {path: "agregar", component: AddComponent}
    ]},
    {path: "usuarios", component: UsersComponent, children: [
      {path: "ver", component: GetUsersComponent}
    ]}
  ]},
  {path: "tienda", component: StoreComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
