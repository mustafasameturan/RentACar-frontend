import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }

  getByCarId(carId : number) : Observable<ListResponseModel<CarImage>>{
    let path = environment.apiUrl + "carImages/getbycarid?carid=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }

  getAll() : Observable<ListResponseModel<CarImage>>{
    let path = environment.apiUrl + "carImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }

  getImage(imagePath : string){
    let path = environment.apiUrl + imagePath;
    return path;
  }
}
