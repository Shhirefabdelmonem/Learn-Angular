import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products :Iproduct[];

  count:number=0;
    constructor() {
      this.products = [
          { id: 1, name: "ASUS", price: 999.99, quantity: 1, imgUrl: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1", categoryId: 1 },
          { id: 2, name: "Smartphone", price: 499.99, quantity: 25, imgUrl: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1", categoryId: 2 },
          { id: 3, name: "apple watch", price: 79.99, quantity: 50, imgUrl: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1", categoryId: 3 },
          { id: 4, name: "Dell", price: 299.99, quantity: 1, imgUrl: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1", categoryId: 1 },
          { id: 5, name: "lenovo", price: 299.99, quantity: 15, imgUrl: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1", categoryId: 3 },
          { id: 8, name: "Smartwatch", price: 149.99, quantity: 0, imgUrl: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1", categoryId: 2 },
          { id: 6, name: "Smartwatch", price: 149.99, quantity: 0, imgUrl: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1", categoryId: 2 },
          { id: 7, name: "Smartwatch", price: 149.99, quantity: 0, imgUrl: "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1", categoryId: 2 }
      ];
      
  }

  getProductByCatId(CatId:number):Iproduct[]{
     let productList :Iproduct[];
    console.log('type of CatId',typeof CatId)
     if (Number(CatId) ===0)
      return this.products;
    else {
      console.log('service' ,CatId)
      return this.products.filter(prd=>prd.categoryId === Number(CatId));
    }

  }
  getProductById(id:number):Iproduct |null{
     let found=this.products.find(prd=>prd.id===id);
     return found ? found :null;
  }

  mapProductsToId():number[]{
    return this.products.map(prd=>prd.id);
  }

}
