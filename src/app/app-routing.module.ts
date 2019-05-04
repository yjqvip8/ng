import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from "./shop-list/shop-list.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { ShopDetailComponent } from "./shop-detail/shop-detail.component"
const routes: Routes = [
  {path:"shopList",component:ShopListComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"detail/:shopid",component:ShopDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
