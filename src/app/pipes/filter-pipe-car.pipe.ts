import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipeCar'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    
    let car = filterText?value
    .filter((c:Car)=>c.model.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
    
    return car;
  }

  

}
