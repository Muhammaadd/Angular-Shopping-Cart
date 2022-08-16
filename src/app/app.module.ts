import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FavoriteProductComponent } from './components/favorite-product/favorite-product.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { SlicePipe } from './pipes/slice.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ScaleItemDirective } from './Directives/scale-item.directive';
import { DisplayDirective } from './Directives/display.directive';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ImagesComponent } from './components/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    ProductCartComponent,
    HeaderComponent,
    AsideComponent,
    SlicePipe,
    NotFoundComponent,
    HomeComponent,
    ProductDetailsComponent,
    ScaleItemDirective,
    DisplayDirective,
    LoginComponent,
    UserDetailsComponent,
    AddProductComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
