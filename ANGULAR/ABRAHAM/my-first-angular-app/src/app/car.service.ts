import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class carService{
  cars=[
    "Toyota Corrolla", "Ford Fiesta", "Chevrolet Silvedado", "Renault Twingo"
  ];

  getCars():string[]{
    return this.cars;
  }

  getCar(id:number){
    return this.cars[id];
  }
}