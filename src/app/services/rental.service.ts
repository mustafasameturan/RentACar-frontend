import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44381/api/rentals/getallrentaldetails"

  constructor(private httpClient : HttpClient) { }

  getRentals(){
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
