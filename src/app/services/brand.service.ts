
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44381/api/brands/getall';

  constructor(private htppClient : HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.htppClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}