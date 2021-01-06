import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from './components/shop/product-details/product-details.component';
import {HomeComponent} from './components/shop/home/home.component';
import {ProductPageComponent} from './components/shop/product-page/product-page.component';
import {FullPageCartComponent} from './components/shop/full-page-cart/full-page-cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ProductPageComponent},
  {path: 'shop/product/:productId', component: ProductDetailsComponent},
  {path: 'cart', component: FullPageCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
