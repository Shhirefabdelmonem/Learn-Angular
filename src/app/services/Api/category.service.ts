import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient)  { }
  getAllCategories():Observable<Icategory[]> {
   return  this._httpClient.get<Icategory[]>(`${environment.baseUrl}/categories`);
  }
}
