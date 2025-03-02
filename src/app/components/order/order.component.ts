import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';
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
export class OrderComponent implements OnInit, AfterViewInit {
  category:Icategory[]=[] ;
  boughtProducts: { product: Iproduct, price: number, count: number }[] = [];
  
  selectedCategorId:number=0;
  
  @ViewChild('userNameInput') viewInput!: ElementRef;
  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;
  constructor(private _orderService :OrderService){
   
  }
  ngAfterViewInit(): void {
    this.viewInput.nativeElement.value = "Hello";
   console.log(this.productsComponent);
  }
  
  ngOnInit(): void {
    this.category=this._orderService.categories;
  }
 
  // recieve event from child component
  viewShoppingCart(event: { product: Iproduct; price: number; count: number; }) {
    this.boughtProducts.push(event);

  }
 
  
    

}
