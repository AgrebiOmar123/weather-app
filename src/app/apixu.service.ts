import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) 
  {

  }
  getWeather(location: any){
    return this.http.get(
      'https://api.weatherapi.com/v1/current.json?key=ff03d30fead046f28be84232232210&q='+location+'&aqi=no'
        
    );
  }
}
