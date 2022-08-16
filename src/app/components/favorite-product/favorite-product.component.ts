import { AddToCartService } from './../../Services/add-to-cart.service';
import { Iproduct } from './../../ViewModels/iproduct';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css']
})
export class FavoriteProductComponent implements OnInit,OnChanges {
  listofFav:Iproduct[]=[];
  constructor(private serv:AddToCartService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    // this.serv.getfav().subscribe(x=>this.listofFav.push(x));
    this.listofFav =  this.serv.getfav();
  }

}
