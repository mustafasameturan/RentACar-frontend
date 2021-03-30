import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44381/api/colors/getall';

  constructor(private httpClient : HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }

  getColorsById(colorId:number):Observable<SingleResponseModel<Color>>{
    let newPath = environment.apiUrl + "colors/getbycolorid?colorid=" + colorId
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }

  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"colors/addcolor",color);
  }

  update(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"colors/updatecolor",color)
  }
}