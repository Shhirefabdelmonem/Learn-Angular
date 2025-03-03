import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  
  currentId:number=0;
  product:Iproduct| null=null;
  idArr: number[] = [];
  
  constructor(private _activateRoute: ActivatedRoute, private _productService: ProductService, 
    private _location: Location, private _router: Router) {

    this.idArr = this._productService.mapProductsToId();
    
  }
  ngOnInit(): void {
      this._activateRoute.paramMap.subscribe((params)=>{
      this.currentId=Number(params.get('id'));
      this.product=this._productService.getProductById(this.currentId);
    });

      
  //  this.currentId=Number( this._activateRoute.snapshot.paramMap.get('id'));
  //   this.product=this._productService.getProductById(this.currentId);
  }

  goBack(){
    // i want to go back to the previous page
    this._location.back();
  }

  next(){
    
    let currrentIndex=this.idArr.findIndex((id)=>id===this.currentId);
    if (currrentIndex!=this.idArr.length-1)
    this._router.navigateByUrl(`/details/${this.idArr[currrentIndex+1]}`);

  }

  prev(){
    
    let currrentIndex=this.idArr.findIndex((id)=>id===this.currentId);
    if (currrentIndex!=0){
      this._router.navigateByUrl(`/details/${this.idArr[currrentIndex-1]}`);
    }
  }
}
