import { Icategory } from './../ViewModels/icategory';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryNameService {
  categories:Icategory[];

  constructor() {
    this.categories = [
      {
        name:"Women's clothing"
      } ,
      {
        name:"Men's clothing"
      } ,
      {
        name:"Jewelery"
      } ,
      {
        name:"Electronics"
      }
    ];
  }
  getCategoriesName():Icategory[]{
    return this.categories;
  }
}
