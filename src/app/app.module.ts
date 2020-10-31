import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsRoutingModule } from './restaurants/restaurants-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RestaurantsRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
