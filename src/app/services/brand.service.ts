import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44381/api/brands/getall';

  constructor(private htppClient : HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.htppClient.get<BrandResponseModel>(this.apiUrl);
  }
}
