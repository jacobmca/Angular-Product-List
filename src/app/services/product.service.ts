import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: "This is the first product.", price: "$1,000", imageURL: '/assets/product1.jpg'},
    { id: 2, name: 'Product 2', description: "This is the second product.", price: "$2,000", imageURL: '/assets/product2.webp'},
    { id: 3, name: 'Product 3', description: "This is the third product.", price: "$3,000", imageURL: '/assets/product3.jpg'}
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
