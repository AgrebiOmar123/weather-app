import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServicesService {

  constructor(private _http: HttpClient) 
  {

  }
  
  newsApiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
 

  topFood():Observable<any>{
    return this._http.get(this.newsApiUrl);}
}
