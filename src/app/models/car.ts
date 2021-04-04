import { CarImage } from "./carImage";

export interface Car{
    carId:number;
    brandId:number;
    colorId:number;
    modelYear:string;
    dailyPrice:number;
    brandName:string;
    colorName:string;
    description:string;
    model:string;
    imagePath:string;
}
