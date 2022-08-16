import { Iproduct } from './../../ViewModels/iproduct';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryNameService } from 'src/app/Services/category-name.service';
import { ProductService } from 'src/app/Services/product.service';
import { Icategory } from 'src/app/ViewModels/icategory';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm:FormGroup;

  constructor(
    private route:Router,
    private productService:ProductService,
    private getCategoriesName:CategoryNameService,
    private fb:FormBuilder) {
    this.productForm = this.fb.group({
      id:['',[Validators.required,Validators.min(21)]] ,
      title:['',[Validators.required]] ,
      price:['',[Validators.required,Validators.min(100)]] ,
      description:['',[Validators.required]] ,
      category:['0',[Validators.required]] ,
      image:['https://picsum.photos/200/300?random=10'] ,
      rating:this.fb.group({
        rate:['',[Validators.required]] ,
        count:['',[Validators.required]]})
      });
  }

  ngOnInit(): void {
  }
  get id(){
    return this.productForm.get('id');
  }

  get title(){
    return this.productForm.get('title');
  }

  get price(){
    return this.productForm.get('price');
  }

  get description(){
    return this.productForm.get('description');
  }

  get category(){
    return this.productForm.get('category');
  }
  get rate(){
    return this.productForm.get('rating')?.get('rate');
  }

  get count(){
    return this.productForm.get('rating')?.get('count');
  }
  addNewProduct(){
    this.productService.addNewProduct(this.productForm.value as Iproduct);
    this.route.navigate(['/products']);

  }
  getCategoriesNames():Icategory[]{
    return this.getCategoriesName.getCategoriesName();
  }

}
