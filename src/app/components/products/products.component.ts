import { Component, EventEmitter, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { filter } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
  products: Iproduct[] = [];
  filterdProducts: Iproduct[] = [];
  @Input() receivedCategory: number=0;
  
  
  count: number = 0;
  //define publisher (event emitter)
  @Output() onSendProduct: EventEmitter<{ product: Iproduct, price: number, count: number }>;
  constructor(private _productServiec: ProductService, private _orderService: OrderService) {
    // Initialize products from service
    this.products = this._productServiec.products;
    this.filterdProducts = this.products; // Set initial filtered products to all products
    this.onSendProduct=new EventEmitter<{ product: Iproduct, price: number, count: number }>();
  }
  ngOnChanges(): void {
    this.filterProduct();
  }
    
  change(p:Iproduct){
    this.count+=1;
    p.quantity-=1;
    //Fire event when user click on buy button
   this.onSendProduct.emit({product:p,price:p.price*this.count,count:this.count});
    
  }

  filterProduct() {
      console.log('Before filter - Category:', this.receivedCategory);
      if (this.receivedCategory === 0) {
          this.filterdProducts = this.products;
      } else {
          this.filterdProducts = this._productServiec.getProductByCatId(this.receivedCategory);
      }
      console.log('After filter - Products:', this.filterdProducts);
  }
}
