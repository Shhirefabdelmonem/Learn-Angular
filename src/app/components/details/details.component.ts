import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  
  currentId:number=0;
  product:Iproduct| null=null;
  constructor(private _activateRoute: ActivatedRoute, private _productService: ProductService) {

    
   }
  ngOnInit(): void {
   this.currentId=Number( this._activateRoute.snapshot.paramMap.get('id'));
    this.product=this._productService.getProductById(this.currentId);
  }



}
