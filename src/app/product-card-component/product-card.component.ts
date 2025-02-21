import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <h3>{{product.name}}</h3>
      <img [src]="product.imageURL" [alt]="product.name">
      <p>{{product.description}}</p>
      <p class="price">{{product.price}}</p>
      <button (click)="onMoreInfo()">More Information</button>
    </div>
  `,
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() moreInfo = new EventEmitter<number>();

  onMoreInfo(): void {
    this.moreInfo.emit(this.product.id);
  }
}