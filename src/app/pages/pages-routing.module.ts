import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('@app/pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('@app/pages/profile/profile.module').then((m) => m.ProfileModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
