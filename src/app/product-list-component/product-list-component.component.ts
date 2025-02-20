import { Component } from '@angular/core';
import { ProductService } from '..services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list-component',
  imports: [],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})

export class ProductListComponentComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }
}
