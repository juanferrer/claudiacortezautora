import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { MainComponent } from './main/main.component';
import { CarouselItemComponent } from './main/carousel/carousel-item/carousel-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    NavigationBarComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
