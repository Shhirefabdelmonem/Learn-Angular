import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from "../products/products.component";
import { OrderService } from '../../services/order.service';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [FormsModule, ProductsComponent,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  category:Icategory[]=[] ;
  boughtProducts: { product: Iproduct, price: number, count: number }[] = [];
  
  selectedCategorId:number=0;
  constructor(private _orderService :OrderService){
   
  }
  
  ngOnInit(): void {
    this.category=this._orderService.categories;
  }
 
  // recieve event from child component
  viewShoppingCart(event: { product: Iproduct; price: number; count: number; }) {
    this.boughtProducts.push(event);

  }
 
  
    

}
