import { Iproduct } from './../../ViewModels/iproduct';
import { ProductService } from './../../Services/product.service';
import { Icategory } from './../../ViewModels/icategory';
import { CategoryNameService } from './../../Services/category-name.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  filterList?:Iproduct[];
  clicked:Iproduct[]=[];
  status:boolean=true;

  constructor(private getCategoriesName:CategoryNameService,private getProducts:ProductService) {
    this.filterList = this.getProducts.getAllProducts();
  }

  ngOnInit(): void {
  }
  getCategoriesNames():Icategory[]{
    return this.getCategoriesName.getCategoriesName();
  }
  getAllProducts(catName:string):Iproduct[]{
    this.filterList = this.getProducts.getProductByCategoryName(catName);
    return this.filterList;
  }
  writeid(event:any)
  {
    this.clicked.push(event);
  }

}
