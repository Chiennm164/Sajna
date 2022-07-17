import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError ,tap,map } from 'rxjs';
import { Product } from 'models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private productURL ='https://fakestoreapi.com/products'


getProductsFromAPI(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productURL).pipe(
    tap(   ),
    catchError(error => of([]))
  )
}
  constructor(private http:HttpClient) { }
}
