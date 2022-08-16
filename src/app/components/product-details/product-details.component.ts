import { ProductService } from './../../Services/product.service';
import { Iproduct } from './../../ViewModels/iproduct';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnChanges {
  product!:Iproduct;
  productid:number=0;

  constructor(private activerout:ActivatedRoute,private serv:ProductService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.activerout.params.subscribe(x=>{
      this.productid=x['id'];
      let pr = this.serv.getProductById(this.productid);
      if(pr!==undefined)
      this.product = pr;
  });
  }

}
