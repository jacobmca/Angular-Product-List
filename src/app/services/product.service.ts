import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: "This is the first product", price: 1000},
    { id: 2, name: 'Product 2', description: "This is the second product", price: 2000},
    { id: 3, name: 'Product 3', description: "This is the third product", price: 3000}
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
