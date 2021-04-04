import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  cars : Car [] = [];
  images : CarImage[] = [];
  Images : string[] = [];
  defaultImage = '/images/default.jpg';
  imageBasePath = environment.baseUrl;

  constructor
  (
    private activatedRoute : ActivatedRoute,
    private carService : CarService,
    private carImageService : CarImageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.getCarById(params['carId']);
      this.getImagesByCarId(params['carId'])
    })
  }

  getImagesByCarId(carId : number){
    this.carImageService.getByCarId(carId).subscribe((response)=>{
      this.images = response.data;
    });
  }

  // getAllCarImages(){
  //   this.carImageService.getAll().subscribe((response)=>{
  //     this.images = response.data;
  //   })
  // }

  getCarById(carId : number){
    this.carService.getCarsById(carId).subscribe((response)=>{
      this.cars = response.data;
    })
  }

}
