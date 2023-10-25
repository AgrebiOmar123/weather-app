import { Routes } from "@angular/router";
import { WeatherComponent } from './weather/WeatherComponent';
import { TopNewsComponent } from "./top-news/top-news.component";

export const allAppRoutes: Routes = [
  { path: '', component: TopNewsComponent }
];