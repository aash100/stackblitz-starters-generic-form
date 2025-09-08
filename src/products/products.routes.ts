import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';

export const route: Routes = [
  {
    path: 'products',
    component: ProductList,
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];
