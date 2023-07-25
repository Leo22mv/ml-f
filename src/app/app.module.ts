import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CarrouselComponent } from './components/pages/home/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './components/pages/store/store.component';
import { AdminComponent } from './components/pages/admin/admin.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { ProductsComponent } from './components/pages/admin/products/products.component';
import { GetComponent } from './components/pages/admin/products/get/get.component';
import { AddComponent } from './components/pages/admin/products/add/add.component';
import { DeleteComponent } from './components/pages/admin/products/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarrouselComponent,
    FooterComponent,
    StoreComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProductsComponent,
    GetComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
