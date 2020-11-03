import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, RestaurantsRoutingModule],
})
export class RestaurantsModule {}
