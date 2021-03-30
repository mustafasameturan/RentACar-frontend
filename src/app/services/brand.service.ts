
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44381/api/brands/getall';

  constructor(private httpClient : HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }

  getBrandsById(brandId:number):Observable<SingleResponseModel<Brand>>{
    let newPath = environment.apiUrl + "brands/getbybrandid?brandid=" + brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"brands/addbrand",brand)
  }

  update(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"brands/updatebrand",brand)
  }
}