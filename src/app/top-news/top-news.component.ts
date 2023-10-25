import { Component,OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  
  constructor(private _services:NewsapiserviceService){}
  topNewDisplay:any=[];
  ngOnInit(): void {
    this._services.topNews().subscribe((result)=>{
      console.log(result);
      this.topNewDisplay=result.articles;
    })
    
    }
  
  
  }

