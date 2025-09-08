import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then((m) => m.route),
  },
  {
    path: 'hello',
    loadChildren: () =>
      import('./hello/hello-routing-module').then((m) => m.HelloRoutingModule),
  },
];
