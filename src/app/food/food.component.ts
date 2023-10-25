import { Component,OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
import { FoodServicesService } from '../food-services.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{
  constructor(private _services:FoodServicesService){}
  topFoodDisplay:any=[];
  ngOnInit(): void {
    this._services.topFood().subscribe((result)=>{
      console.log(result);
      this.topFoodDisplay=result.articles;
    })
    
  }
}
