import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarouselItemComponent } from './home/carousel-item/carousel-item.component';
import { AccessoriesListComponent } from './inventory/accessories/accessories-list/accessories-list.component';
import { ElectronicsListComponent } from './inventory/electronics/electronics-list/electronics-list.component';
import { VideoGamesListComponent } from './inventory/video-games/video-games-list/video-games-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { DetailModalComponent } from './shared/components/detail-modal/detail-modal.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartSummaryComponent } from './shopping-cart/cart-summary/cart-summary.component';
import { CartListComponent } from './shopping-cart/cart-list/cart-list.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselItemComponent,
    AccessoriesListComponent,
    ElectronicsListComponent,
    VideoGamesListComponent,
    ProductListComponent,
    DetailModalComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    CartSummaryComponent,
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'video-games-list', component: VideoGamesListComponent},
      {path: 'electronics-list', component: ElectronicsListComponent},
      {path: 'accessories-list', component: AccessoriesListComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
