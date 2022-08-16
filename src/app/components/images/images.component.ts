import { Component, OnInit } from '@angular/core';
import { ImgURLService } from 'src/app/Services/img-url.service';
import { IImage } from 'src/app/ViewModels/iimage';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  imagesList:IImage[]=[];
  constructor(private imageService:ImgURLService) {
    this.imageService.getAllImages().subscribe(x=>this.imagesList=x);
  }

  ngOnInit(): void {
  }

}
