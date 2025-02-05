import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {HeaderComponent} from './components/layout/header/header.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {HomeComponent} from './components/shop/home/home.component';
import {ProductPageComponent} from './components/shop/product-page/product-page.component';
import {ProductComponent} from './components/shop/product/product.component';
import {ProductDetailsComponent} from './components/shop/product-details/product-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FullPageCartComponent} from './components/shop/full-page-cart/full-page-cart.component';
import {PointReplacerPipe} from './components/overwrittenComponents/point-replacer.pipe';
import {CartHoverComponent} from './components/shop/cart-hover/cart-hover.component';
import { LoginRegisterComponent } from './components/user/login-register/login-register.component';
import { MyProfileComponent } from './components/user/my-profile/my-profile.component';
import { ShowOrderComponent } from './components/user/show-order/show-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductPageComponent,
    ProductComponent,
    ProductDetailsComponent,
    FullPageCartComponent,
    PointReplacerPipe,
    CartHoverComponent,
    LoginRegisterComponent,
    MyProfileComponent,
    ShowOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
