import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http: HttpClient) 
  {

  }
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=77921179800647c086d74a343501819f";
 

  topNews():Observable<any>{
    return this._http.get(this.newsApiUrl);}
}
