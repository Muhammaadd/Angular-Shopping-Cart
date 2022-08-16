import { Iproduct } from './../../ViewModels/iproduct';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product!:Iproduct[];

  constructor() { }

  ngOnInit(): void {
  }

}
