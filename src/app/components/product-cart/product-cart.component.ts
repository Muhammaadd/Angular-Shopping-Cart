import { AddToCartService } from './../../Services/add-to-cart.service';
import { Iproduct } from './../../ViewModels/iproduct';
import { Component, OnChanges, OnInit, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  products:Iproduct[]=[];
  constructor(private serv:AddToCartService) { }

  ngOnInit(): void {
    // this.serv.getProduct().subscribe(x=>this.products.push(x));
    this.products = this.serv.getCartList();
  }

}
