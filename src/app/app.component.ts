import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'RentACar';
  user: string = 'Mustafa Turan';

  car1: any = { carId: 1, Model: 'Clio', brandId: 1, dailyPrice: 100 };
  car2: any = { carId: 2, Model: 'Megane 3', brandId: 1, dailyPrice: 150 };
  car3: any = { carId: 3, Model: 'AMG', brandId: 2, dailyPrice: 400 };
  car4: any = { carId: 4, Model: 'Focus', brandId: 3, dailyPrice: 100 };

  cars = [this.car1, this.car2, this.car3, this.car4];
}
