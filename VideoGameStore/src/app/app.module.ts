import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselItemComponent,
    AccessoriesListComponent,
    ElectronicsListComponent,
    VideoGamesListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'video-games-list', component: VideoGamesListComponent},
      {path: 'electronics-list', component: ElectronicsListComponent},
      {path: 'accessories-list', component: AccessoriesListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
