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
        path: '',
        loadChildren: () => import('@app/pages/pages.module').then((m) => m.PagesModule),
      }
    ]
  },
  {
    path:'login',
    loadChildren: () => import('@app/login/login.module').then((m) => m.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
