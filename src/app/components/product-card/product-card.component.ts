import { AddToCartService } from './../../Services/add-to-cart.service';
import { Iproduct } from './../../ViewModels/iproduct';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Iproduct;
  @Output() sendproduct!:EventEmitter<Iproduct>;
  @Input() status:boolean=false;
  hoverstatus:boolean=false;
  constructor(private serv:AddToCartService) {
    this.sendproduct = new EventEmitter<Iproduct>();
    }
    changeStatus(){
      this.hoverstatus=!this.hoverstatus;
      console.log(this.hoverstatus);

    }
  ngOnInit(): void {
  }
    senddata(product:any){
      this.serv.addProductToCartList(product);
    }
  sendfav(product:any)
  {
    this.serv.addfav(this.product);
  }

}
