import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Iproduct } from '../../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getAllProuducts():Observable<Iproduct[]> {
    return this._httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }

  getProductById(id: number) :Observable<Iproduct>{
    return this._httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`);
  }
  getProductByCatId(CatId: number):Observable<Iproduct[]> {
    return this._httpClient.get<Iproduct[]>(`${environment.baseUrl}/products?categoryId=${CatId}`);
  }

  
}
