import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
