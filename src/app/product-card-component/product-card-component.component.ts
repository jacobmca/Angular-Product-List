import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.component.html',
  styleUrl: './product-card-component.component.css'
})
export class ProductCardComponentComponent {
  @Input() product!: Product;
}
