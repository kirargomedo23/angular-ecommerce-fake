import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'app',
    children: [
      {
        path: 'products',
        loadChildren: () => import('@app/pages/products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('@app/pages/profile/profile.module').then((m) => m.ProfileModule),
      }
    ]
  },
  {
    path:'login',
    loadChildren: () => import('@app/pages/login/login.module').then((m) => m.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
