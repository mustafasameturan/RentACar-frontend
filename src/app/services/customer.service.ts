import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44381/api/customers/getall";

  constructor(private httpClient : HttpClient) { }

  getCustomers(){
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}
