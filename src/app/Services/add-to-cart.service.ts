import { Iproduct } from './../ViewModels/iproduct';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  productSubject=new Subject<Iproduct>();
  productFavSub=new Subject<Iproduct>();
  cartList:Iproduct[]=[];
  favoList:Iproduct[]=[];
  constructor() { }
  addProduct(product:Iproduct)
  {
    this.productSubject.next(product);
  }
  addfav(product:Iproduct)
  {
    // this.productFavSub.next(product);
    this.favoList.push(product);
  }

  addProductToCartList(product:Iproduct){
    // this.productSubject.next(product);
    this.cartList.push(product);
  }
  getProduct()
  {
    return this.productSubject.asObservable();
  }
  getfav()
  {
    return this.favoList;
  }
  getCartList(){
    return this.cartList;
  }
}
