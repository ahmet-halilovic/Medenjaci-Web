import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from './components/shop/product-details/product-details.component';
import {ProductPageComponent} from './components/shop/product-page/product-page.component';

const routes: Routes = [
  {path: '', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
