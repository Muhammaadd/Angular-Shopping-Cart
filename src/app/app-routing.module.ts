import { AddProductComponent } from './components/add-product/add-product.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent} ,
  {path:'products',component:ProductListComponent},
  {path: 'cart',component:ProductCartComponent},
  {path:'carddt/:id',component:ProductDetailsComponent},
  {path: 'login',component:LoginComponent} ,
  {path:'userDetails',component:UserDetailsComponent},
  {path:'newProuct',component:AddProductComponent},
  {path:'images',component:ImagesComponent},
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: '**',component:NotFoundComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
