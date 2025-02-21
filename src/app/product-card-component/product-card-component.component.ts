import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-component.component.html',
  styleUrls: ['./product-card-component.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  onRemove(): void {
    this.remove.emit(this.product.id);
  }
}