  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  //apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = environment.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = environment.apiUrl  + "cars/getallbybrandid?id=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath = environment.apiUrl + "cars/getallbycolorid?id=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrandAndColor(brandId:number, colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl +`cars/getbybrandandcolorid?brandid=${brandId}&colorid=${colorId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"cars/addcar",car);
  }

  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"cars/updatecar",car);
  }
}