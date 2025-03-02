import { Injectable } from '@angular/core';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   
  categories:Icategory[]
  selectedCategorId:number=0;
  constructor() {this.categories=[
    {id:1, name:"Pc"},
    {id :2,name:"mobile"},
    {id :3,name:"Watch"}
  ] }
}
