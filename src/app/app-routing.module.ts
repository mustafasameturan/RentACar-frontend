import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"customers", component:CustomerComponent},
  {path:"rentals", component:RentalComponent},
  {path:"cars", component:CarComponent},
  
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/filter/:brandId/:colorId", component:CarComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"cars/update", component:CarUpdateComponent},

  {path:"brands/add", component:BrandAddComponent},
  {path:"brands/update/:brandId", component:BrandUpdateComponent},

  {path:"colors/add", component:ColorAddComponent},
  {path:"colors/update/:colorId", component:ColorUpdateComponent}
  // {path:"cars/filter/:brandId", component:CarComponent},
  // {path:"cars/filter/:colorId", component:CarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
