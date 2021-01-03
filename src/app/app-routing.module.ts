import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPageComponent} from './components/shop/product-page/product-page.component';
import {ProductComponent} from './components/shop/product/product.component';

const routes: Routes = [
  {path: '', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
