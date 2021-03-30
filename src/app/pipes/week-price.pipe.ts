import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekPrice'
})
export class WeekPricePipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return (value*7)-rate;
  }

}
