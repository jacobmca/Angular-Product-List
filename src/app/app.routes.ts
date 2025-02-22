import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list.component';
import { ProductDetailComponent } from './product-detail-component/product-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent }
];
