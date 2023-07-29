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

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { ProductsComponent } from './components/pages/admin/products/products.component';
import { GetComponent } from './components/pages/admin/products/get/get.component';
import { AddComponent } from './components/pages/admin/products/add/add.component';
import { DeleteComponent } from './components/pages/admin/products/delete/delete.component';
import { ALogoutComponent } from './components/header/a-logout/a-logout.component';
import { ALoginComponent } from './components/header/a-login/a-login.component';
import { ARegisterComponent } from './components/header/a-register/a-register.component';
import { AAdminComponent } from './components/header/a-admin/a-admin.component';
import { GetUsersComponent } from './components/pages/admin/users/get-users/get-users.component';
import { PurchasesComponent } from './components/pages/admin/purchases/purchases.component';
import { GetPurchasesComponent } from './components/pages/admin/purchases/get-purchases/get-purchases.component';
import { AddPurchaseComponent } from './components/pages/admin/purchases/add-purchase/add-purchase.component';
import { ProductComponent } from './components/pages/admin/purchases/add-purchase/product/product.component';
import { DetailsComponent } from './components/pages/admin/purchases/get-purchases/details/details.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AProfileComponent } from './components/header/a-profile/a-profile.component';
import { JwtInterceptor } from './services/jwt-interceptor.service';
import { SearchComponent } from './components/header/search/search.component';
import { StoreProductComponent } from './components/pages/store/store-product/store-product.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ACartComponent } from './components/header/a-cart/a-cart.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { FavsComponent } from './components/pages/home/favs/favs.component';
import { RecommendedComponent } from './components/pages/home/recommended/recommended.component';

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
    DeleteComponent,
    ALogoutComponent,
    ALoginComponent,
    ARegisterComponent,
    AAdminComponent,
    GetUsersComponent,
    PurchasesComponent,
    GetPurchasesComponent,
    AddPurchaseComponent,
    ProductComponent,
    DetailsComponent,
    ProfileComponent,
    AProfileComponent,
    SearchComponent,
    StoreProductComponent,
    CartComponent,
    ACartComponent,
    SearchResultsComponent,
    FavsComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
