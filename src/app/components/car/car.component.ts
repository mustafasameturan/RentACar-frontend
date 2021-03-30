import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];

  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
      if(params["brandId"] && params["colorId"]){
        this.getCarsByFilter(params["brandId"],params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByFilter(brandId:number, colorId:number){
    this.carService.getCarsByBrandAndColor(brandId,colorId).subscribe((response) => {
      this.cars=response.data;
      this.dataLoaded = true;
      if(this.cars.length>0){
        this.toastrService.success("Aradağınız sonuca eş değer araçlar listelendi.","Arama Sonucu")
      }
      else if(this.cars.length==0){
        this.toastrService.error("Maalesef, aradığınız kategorilere eş değer bir araç bulunamadı.","Arama Sonucu")
      }
    })
  }
}
