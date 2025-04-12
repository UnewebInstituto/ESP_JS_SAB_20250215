import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CarService{
    cars = ["Toyota Corolla", "Ford Fiesta", "Chevrolet Silverado", "Renault Twingo"];
    getCars():string[]{
        return this.cars;
    }
    getCar(id: number){
        return this.cars[id];
    }
}
