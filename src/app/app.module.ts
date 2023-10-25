import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/WeatherComponent';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";
import { TopNewsComponent } from './top-news/top-news.component';
import { NewsapiserviceService } from './service/newsapiservice.service';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TopNewsComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApixuService,NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
