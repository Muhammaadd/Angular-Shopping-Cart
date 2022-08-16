import { IImage } from './../ViewModels/iimage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgURLService {

  constructor(private httpClient:HttpClient) {
  }
  getAllImages(){
    return this.httpClient.get<IImage[]>('https://jsonplaceholder.typicode.com/albums/1/photos')
  }
}
