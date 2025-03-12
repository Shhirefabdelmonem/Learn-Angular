import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/Api/category.service';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/Api/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  categories: Icategory[]=[]as Icategory[];
  newProduct:Iproduct={} as Iproduct;

 constructor(private _categoryService:CategoryService,
  private _productServiece:ProductService, private _router:Router

 ) {}
 
 ngOnInit(): void {
     this._categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories=data;
      }
    });
  }

  addNewProduct(){
    this._productServiece.addProduct(this.newProduct).subscribe({
      next:()=> alert('product added')
    });
    this._router.navigateByUrl('/products');

  }

  
}
