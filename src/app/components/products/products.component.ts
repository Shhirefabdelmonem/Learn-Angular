import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { filter } from 'rxjs';
import { ProductService } from '../../services/Api/product.service';
import { OrderService } from '../../services/order.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightCardDirective,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges,OnInit {
  products: Iproduct[] = [] as Iproduct[];
  filterdProducts: Iproduct[] = [];
  @Input() receivedCategory: number=0;
  @Output() onSendProduct: EventEmitter<{ product: Iproduct, price: number, count: number }>;
  
  
  count: number = 0;
  //define publisher (event emitter)
  constructor(private _productService:ProductService, private router:Router) {
    // Initialize products from service
    // this.products = this._productService.products;
    
    this.filterdProducts = this.products; // Set initial filtered products to all products
    this.onSendProduct=new EventEmitter<{ product: Iproduct, price: number, count: number }>();
  }
  ngOnInit(): void {
      this._productService.getAllProuducts().subscribe({
      next:(res)=>{
        this.products=res;
        this.filterdProducts=this.products; 
      },
      error:(err)=>console.log(err) 
    });
  }
  ngOnChanges(): void {
    // 
    this._productService.getProductByCatId(this.receivedCategory).subscribe({
      next:(res)=>{
        this.filterdProducts=res;
      },
      error:(err)=>console.log(err)
    });
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
          this._productService.getProductByCatId(this.receivedCategory).subscribe({
            next:(res)=>{
              this.filterdProducts=res;
            }
          });
      }
      console.log('After filter - Products:', this.filterdProducts);
  }

  navgateToDetails(id:number){
    this.router.navigateByUrl(`/details/${id}`);
  }
}
